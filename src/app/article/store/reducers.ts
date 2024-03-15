import { Action, createReducer, on } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";

import { ArticleStateInterface } from "../types/articleState.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from "./actions/getFeed.actions";
import { ArticleInterface } from "../../shared/types/article.interface";

const initialValue: ArticleStateInterface = {
  isLoading: false,
  error: null,
  article: null
};

const articleReducer = createReducer(initialValue,
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
  on(routerNavigationAction, (state): ArticleStateInterface => initialValue)
);


export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
};
