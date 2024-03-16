import { Action, createReducer, on } from "@ngrx/store";

import { EditArticleStateInterface } from "../types/editArticleState.interface";
import { editArticleAction, editArticleFailureAction, editArticleSuccessAction } from "./actions/editArticle.action";
import { ArticleInterface } from "../../shared/types/article.interface";
import { ArticleInputInterface } from "../../shared/types/articleInput.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "./actions/getArticle.action";

const initialState: EditArticleStateInterface = {
  isLoading: false,
  errors: null,
  article: null,
  isSubmitting: false
};

const createArticleReducer = createReducer(initialState,
  on(editArticleAction, (state, payload: { articleInput: ArticleInputInterface, slug: string }): EditArticleStateInterface => {
    return ({
      ...state,
      errors: null,
      isSubmitting: true
    });
  }),
  on(editArticleSuccessAction, (state, payload: { article: ArticleInterface }): EditArticleStateInterface => {
    return ({
      ...state,
      isSubmitting: false,
      errors: null,
      article: payload.article
    });
  }),
  on(editArticleFailureAction, (state): EditArticleStateInterface => {
    return ({
      ...state,
      isSubmitting: false,
      errors: 'Edit article error'
    });
  }),
  on(getArticleAction, (state): EditArticleStateInterface => {
    return ({
      ...state,
      isLoading: true,
      errors: null
    });
  }),
  on(getArticleSuccessAction, (state, payload: { article: ArticleInterface }): EditArticleStateInterface => {
    return ({
      ...state,
      isLoading: false,
      errors: null,
      article: payload.article
    });
  }),
  on(getArticleFailureAction, (state): EditArticleStateInterface => {
    return ({
      ...state,
      isLoading: false,
      errors: 'Get article error'
    });
  }),
);


export function reducers(state: EditArticleStateInterface, action: Action) {
  return createArticleReducer(state, action);
};
