import { Action, createReducer, on } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";

import { ArticleStateInterface } from "../types/articleState.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "./actions/getArticle.actions";
import { ArticleInterface } from "../../shared/types/article.interface";

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  article: null
};

const articleReducer = createReducer(initialState,
  on(getArticleAction, (state): ArticleStateInterface => {
    return ({
      ...state,
      isLoading: true,
      error: null
    });
  }),
  on(getArticleSuccessAction, (state, payload: { article: ArticleInterface }): ArticleStateInterface => {
    return ({
      ...state,
      isLoading: false,
      error: null,
      article: payload.article
    });
  }),
  on(getArticleFailureAction, (state): ArticleStateInterface => {
    return ({
      ...state,
      isLoading: false,
      error: 'Article Error'
    });
  }),
  on(routerNavigationAction, (state): ArticleStateInterface => initialState)
);


export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
};
