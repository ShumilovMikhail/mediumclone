import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ArticleStateInterface } from "../types/articleState.interface";

const articleFeature = createFeatureSelector<ArticleStateInterface>('article');

export const articleSelector = createSelector(articleFeature, (articleState: ArticleStateInterface) => articleState.article);

export const errorSelector = createSelector(articleFeature, (articleState: ArticleStateInterface) => articleState.error);

export const isLoadingSelector = createSelector(articleFeature, (articleState: ArticleStateInterface) => articleState.isLoading);
