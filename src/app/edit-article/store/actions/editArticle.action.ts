import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { ArticleInterface } from "../../../shared/types/article.interface";
import { ArticleInputInterface } from "../../../shared/types/articleInput.interface";

export const editArticleAction = createAction(ActionTypes.EDIT_ARTICLE, props<{ articleInput: ArticleInputInterface, slug: string }>());
export const editArticleSuccessAction = createAction(ActionTypes.EDIT_ARTICLE_SUCCESS, props<{ article: ArticleInterface }>());
export const editArticleFailureAction = createAction(ActionTypes.EDIT_ARTICLE_FAILURE);

export const getArticleAction = createAction(ActionTypes.GET_ARTICLE, props<{ slug: string }>());
export const getArticleSuccessAction = createAction(ActionTypes.GET_ARTICLE_SUCCESS, props<{ article: ArticleInterface }>());
export const getArticleFailureAction = createAction(ActionTypes.GET_ARTICLE_FAILURE);
