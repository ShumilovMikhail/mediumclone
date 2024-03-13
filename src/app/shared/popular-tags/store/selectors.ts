import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popularTagsState.interface";

const popularTagsFeature = createFeatureSelector<PopularTagsStateInterface>('popularTags');

export const isLoadingSelector = createSelector(popularTagsFeature, (state) => state.isLoading);

export const popularTagsSelector = createSelector(popularTagsFeature, (state) => state.popularTags);

export const errorsSelector = createSelector(popularTagsFeature, (state) => state.errors);

