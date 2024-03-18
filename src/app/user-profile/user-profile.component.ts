import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription, combineLatestWith, filter, map } from "rxjs";

import { ProfileInterface } from "../shared/types/profile.interface";
import { errorSelector, isLoadingSelector, userProfileSelector } from "./store/selectors";
import { getUserProfileAction } from "./store/actions/getUserProfile.action";
import { currentUserSelector } from "../auth/store/selectors";
import { CurrentUserInterface } from "../shared/types/currentUser.interface";

@Component({
  selector: 'mc-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile: ProfileInterface;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  userProfileSubscription: Subscription;
  isCurrentUserProfile$: Observable<boolean>;

  private slug: string;

  constructor(private store: Store, private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  };

  private initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.isCurrentUserProfile$ = this.store.select(userProfileSelector).pipe(
      combineLatestWith(this.store.select(currentUserSelector)),
      filter(([userProfile, currentUser]: [ProfileInterface, CurrentUserInterface]): boolean => Boolean(userProfile && currentUser)),
      map(([userProfile, currentUser]: [ProfileInterface, CurrentUserInterface]): boolean => {
        return userProfile.username === currentUser.username
      })
    );
  };

  private initializeListeners(): void {
    this.userProfileSubscription = this.store.select(userProfileSelector).subscribe((userProfile: ProfileInterface) => {
      this.userProfile = userProfile;
    });
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug']
      this.fetchProfile();
    });
  };

  private fetchProfile(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  };

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  };
};
