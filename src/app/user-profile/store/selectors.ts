import { createFeatureSelector, createSelector } from "@ngrx/store";

import { UserProfileStateInterface } from "../types/userProfileState.interface";

const userProfileFeature = createFeatureSelector<UserProfileStateInterface>('userProfile');

export const userProfileSelector = createSelector(userProfileFeature, (state: UserProfileStateInterface) => state.profile);
export const isLoadingSelector = createSelector(userProfileFeature, (state: UserProfileStateInterface) => state.isLoading);
export const errorSelector = createSelector(userProfileFeature, (state: UserProfileStateInterface) => state.error);
