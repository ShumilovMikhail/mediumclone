import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginAction } from '../store/actions/login.action';
import { Observable } from 'rxjs';
import { isSubmitSelector, validationErrorsSelector } from '../store/selectors';
import { BackendErrorsInterface } from '../types/backendErrors.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  isSubmitting$: Observable<boolean>
  validationErrors$: Observable<BackendErrorsInterface | null>

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeForm();
  };


  public onSubmit(): void {
    const request = {
      user: this.form.value
    }
    this.store.dispatch(loginAction({ request }))
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.select(isSubmitSelector);
    this.validationErrors$ = this.store.select(validationErrorsSelector);
  };


  private initializeForm(): void {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  };

}
