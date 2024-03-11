import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthStateInterface } from "../types/authState.interface";

export const AuthFeaturesSelectors = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmitSelector = createSelector(AuthFeaturesSelectors, (state: AuthStateInterface) => state.isSubmitting);

export const validationErrorsSelector = createSelector(AuthFeaturesSelectors, (state: AuthStateInterface) => state.validationsErrors);

export const isLoggedInSelector = createSelector(AuthFeaturesSelectors, (state: AuthStateInterface) => state.isLoggedIn);

export const isAnonymousSelector = createSelector(AuthFeaturesSelectors, (state: AuthStateInterface) => state.isLoggedIn === false);

export const currentUserSelector = createSelector(AuthFeaturesSelectors, (state: AuthStateInterface) => state.currentUser);
