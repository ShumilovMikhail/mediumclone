import { Action, createReducer, on } from "@ngrx/store";
import { CreateArticleStateInterface } from "../types/createArticleState.interface";
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from "./actions/createArticle.action";
import { ArticleInputInterface } from "../../shared/types/articleInput.interface";
import { ArticleInterface } from "../../shared/types/article.interface";
import { BackendErrorsInterface } from "../../auth/types/backendErrors.interface";

const initialValue: CreateArticleStateInterface = {
  isLoading: false,
  errors: null
};

const createArticleReducer = createReducer(initialValue,
  on(createArticleAction, (state, payload: { articleInput: ArticleInputInterface }): CreateArticleStateInterface => {
    return ({
      ...state,
      isLoading: true,
      errors: null
    });
  }),
  on(createArticleSuccessAction, (state, payload: { article: ArticleInterface }): CreateArticleStateInterface => {
    return ({
      ...state,
      isLoading: false,
      errors: null
    });
  }),
  on(createArticleFailureAction, (state, payload: { errors: BackendErrorsInterface }): CreateArticleStateInterface => {
    return ({
      ...state,
      isLoading: false,
      errors: payload.errors
    });
  })
);


export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action);
};
