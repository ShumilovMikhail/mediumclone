import { Action, createReducer, on } from "@ngrx/store";

import { SettingsStateInterface } from "../types/settingsState.interface";
import { updateCurrentUserAction, updateCurrentUserFailureAction, updateCurrentUserSuccessAction } from "../../auth/store/actions/updateCurrentUser.action";
import { BackendErrorsInterface } from "../../auth/types/backendErrors.interface";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";
import { updateCurrentUserRequestInterface } from "../../auth/types/updateCurrentUserRequest.interface";

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationsErrors: null
};

const settingsReducer = createReducer(initialState,
  on(updateCurrentUserAction, (state, payload: { currentUserInput: updateCurrentUserRequestInterface }): SettingsStateInterface => {
    return ({
      ...state,
      isSubmitting: true,
      validationsErrors: null
    });
  }),
  on(updateCurrentUserSuccessAction, (state, payload: { currentUser: CurrentUserInterface }): SettingsStateInterface => {
    return ({
      ...state,
      isSubmitting: false,
      validationsErrors: null
    });
  }),
  on(updateCurrentUserFailureAction, (state, payload: { errors: BackendErrorsInterface }): SettingsStateInterface => {
    return ({
      ...state,
      isSubmitting: false,
      validationsErrors: payload.errors
    });
  })
);


export function reducers(state: SettingsStateInterface, action: Action) {
  return settingsReducer(state, action);
};
