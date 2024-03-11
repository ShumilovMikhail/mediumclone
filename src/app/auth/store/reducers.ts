import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";

import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";
import { BackendErrorsInterface } from "../types/backendErrors.interface";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.action";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "./actions/getCurrentUser.action";

const initialState: AuthStateInterface = {
  currentUser: null,
  isSubmitting: false,
  isLoggedIn: false,
  validationsErrors: null,
  isLoading: false
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => {
      return ({
        ...state,
        validationsErrors: null,
        isSubmitting: true
      })
    }
  ),
  on(registerSuccessAction, (state, payload: { currentUser: CurrentUserInterface }): AuthStateInterface => {
    return ({
      ...state,
      currentUser: payload.currentUser,
      isLoggedIn: true,
      isSubmitting: false
    })
  }),
  on(registerFailureAction,
    (state, payload: { errors: BackendErrorsInterface }): AuthStateInterface => {
      console.log(payload)
      return ({
        ...state,
        validationsErrors: payload.errors,
        isSubmitting: false
      })
    }
  ),

  on(loginAction, (state): AuthStateInterface => {
    return ({
      ...state,
      validationsErrors: null,
      isSubmitting: true
    })
  }),
  on(loginSuccessAction, (state, payload: { currentUser: CurrentUserInterface }): AuthStateInterface => {
    return ({
      ...state,
      currentUser: payload.currentUser,
      isLoggedIn: true,
      isSubmitting: false
    })
  }),
  on(loginFailureAction,
    (state, payload: { errors: BackendErrorsInterface }): AuthStateInterface => {
      console.log(payload)
      return ({
        ...state,
        validationsErrors: payload.errors,
        isSubmitting: false
      })
    }
  ),
  on(getCurrentUserAction, (state): AuthStateInterface => {
    return ({
      ...state,
      isLoading: true
    });
  }),
  on(getCurrentUserSuccessAction, (state, payload: { currentUser: CurrentUserInterface }): AuthStateInterface => {
    return ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: payload.currentUser
    });
  }),
  on(getCurrentUserFailureAction, (state): AuthStateInterface => {
    return ({
      ...state,
      isLoading: false
    });
  })
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
};
