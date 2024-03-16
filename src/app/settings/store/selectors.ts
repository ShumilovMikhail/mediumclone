import { createFeatureSelector, createSelector } from "@ngrx/store";

import { SettingsStateInterface } from "../types/settingsState.interface";

const settingsFeature = createFeatureSelector<SettingsStateInterface>('settings');

export const isSubmittingSelector = createSelector(settingsFeature, (settingsState: SettingsStateInterface) => settingsState.isSubmitting);
export const validationErrorsSelector = createSelector(settingsFeature, (settingsState: SettingsStateInterface) => settingsState.validationsErrors);
