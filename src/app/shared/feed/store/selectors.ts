import { createFeatureSelector, createSelector } from "@ngrx/store";

import { FeedStateInterface } from "../types/feedState.interface";

const feedFeature = createFeatureSelector<FeedStateInterface>('feed');

export const feedSelector = createSelector(feedFeature, (feedState: FeedStateInterface) => feedState.data);

export const errorSelector = createSelector(feedFeature, (feedState: FeedStateInterface) => feedState.error);

export const isLoadingSelector = createSelector(feedFeature, (feedState: FeedStateInterface) => feedState.isLoading);
