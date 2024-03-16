import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EditArticleStateInterface } from "../types/editArticleState.interface";

const editArticleFeature = createFeatureSelector<EditArticleStateInterface>('editArticle');

export const isLoadingSelector = createSelector(editArticleFeature, (state: EditArticleStateInterface) => state.isLoading);
export const errorsSelector = createSelector(editArticleFeature, (state: EditArticleStateInterface) => state.errors);
export const getArticleSelector = createSelector(editArticleFeature, (state: EditArticleStateInterface) => state.article);
export const isSubmittingSelector = createSelector(editArticleFeature, (state: EditArticleStateInterface) => state.isSubmitting);

