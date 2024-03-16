import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { CurrentUserInterface } from "../../../shared/types/currentUser.interface";
import { BackendErrorsInterface } from "../../types/backendErrors.interface";
import { updateCurrentUserRequestInterface } from "../../types/updateCurrentUserRequest.interface";

export const updateCurrentUserAction = createAction(ActionTypes.UPDATE_CURRENT_USER, props<{ currentUserInput: updateCurrentUserRequestInterface }>());

export const updateCurrentUserSuccessAction = createAction(ActionTypes.UPDATE_CURRENT_USER_SUCCESS, props<{ currentUser: CurrentUserInterface }>());

export const updateCurrentUserFailureAction = createAction(ActionTypes.UPDATE_CURRENT_USER_FAILURE, props<{ errors: BackendErrorsInterface }>());
