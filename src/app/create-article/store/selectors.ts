import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CreateArticleStateInterface } from "../types/createArticleState.interface";

const createArticleFeature = createFeatureSelector<CreateArticleStateInterface>('createArticle');

export const isLoadingSelector = createSelector(createArticleFeature, (state: CreateArticleStateInterface) => state.isLoading);
export const errorsSelector = createSelector(createArticleFeature, (state: CreateArticleStateInterface) => state.errors);
