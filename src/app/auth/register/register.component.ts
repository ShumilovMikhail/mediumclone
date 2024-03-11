import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../store/actions/register.action';
import { Observable } from 'rxjs';
import { isSubmitSelector, validationErrorsSelector } from '../store/selectors';
import { AuthService } from '../services/auth.service';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { BackendErrorsInterface } from '../types/backendErrors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;
  isSubmitting$!: Observable<boolean>
  validationErrors$!: Observable<BackendErrorsInterface | null>
  constructor(private fb: FormBuilder, private store: Store) { }

  public ngOnInit(): void {
    this.initializeValues();
    this.initializeForm();
  };

  public onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.form.value
    };
    this.store.dispatch(registerAction({ request }));
  };

  private initializeValues() {
    this.isSubmitting$ = this.store.select(isSubmitSelector);
    this.validationErrors$ = this.store.select(validationErrorsSelector);
  };

  private initializeForm(): void {

    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  };


};
