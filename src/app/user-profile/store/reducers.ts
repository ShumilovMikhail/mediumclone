import { Action, createReducer, on } from "@ngrx/store";
import { UserProfileStateInterface } from "../types/userProfileState.interface";
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from "./actions/getUserProfile.action";
import { ProfileInterface } from "../../shared/types/profile.interface";

const initialState: UserProfileStateInterface = {
  profile: null,
  isLoading: false,
  error: null
};

export const userProfileReducer = createReducer(initialState,
  on(getUserProfileAction, (state): UserProfileStateInterface => {
    return ({
      ...state,
      isLoading: true,
      error: null
    });
  }),
  on(getUserProfileSuccessAction, (state, payload: { profile: ProfileInterface }): UserProfileStateInterface => {
    return ({
      ...state,
      profile: payload.profile,
      isLoading: false,
      error: null
    });
  }),
  on(getUserProfileFailureAction, (state): UserProfileStateInterface => {
    return ({
      ...state,
      isLoading: false,
      error: 'Get user profile error'
    });
  })
);

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action);
};
