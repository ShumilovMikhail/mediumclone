import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable, Subscription, filter } from "rxjs";

import { CurrentUserInterface } from "../shared/types/currentUser.interface";
import { currentUserSelector } from "../auth/store/selectors";
import { BackendErrorsInterface } from "../auth/types/backendErrors.interface";
import { isSubmittingSelector, validationErrorsSelector } from "./store/selectors";
import { updateCurrentUserAction } from "../auth/store/actions/updateCurrentUser.action";
import { logoutAction } from "../auth/store/actions/sync.action";
import { updateCurrentUserRequestInterface } from "../auth/types/updateCurrentUserRequest.interface";

@Component({
  selector: 'mc-settings',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingsComponent implements OnInit, OnDestroy {
  currentUser: CurrentUserInterface;
  form: FormGroup;

  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<BackendErrorsInterface>;
  currentUserSubscription: Subscription;

  constructor(private fb: FormBuilder, private store: Store) { };

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeValues();
  };

  onSubmit(): void {
    const currentUserInput: updateCurrentUserRequestInterface = {
      user: {
        ...this.currentUser,
        ...this.form.value
      }
    };
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  };

  logout(): void {
    this.store.dispatch(logoutAction());
  };

  private initializeValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.validationErrors$ = this.store.select(validationErrorsSelector);
  };

  private initializeListeners(): void {
    this.currentUserSubscription = this.store.select(currentUserSelector).pipe(
      filter(Boolean)
    ).subscribe((currentUser: CurrentUserInterface) => {
      this.currentUser = currentUser;
      this.initializeForm();
    });
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      image: [this.currentUser.image, [Validators.required]],
      username: [this.currentUser.username, [Validators.required, Validators.minLength(5)]],
      bio: [this.currentUser.bio],
      email: [this.currentUser.email, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  };

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  };
};
