import { Action, createReducer, on } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";

import { FeedStateInterface } from "../types/feedState.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./actions/getFeed.actions";
import { GetFeedResponseInterface } from "../types/getFeedResponse.interface";

const initialValue: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null
};

const feedReducer = createReducer(initialValue,
  on(getFeedAction, (state): FeedStateInterface => {
    return ({
      ...state,
      isLoading: true,
      error: null
    });
  }),
  on(getFeedSuccessAction, (state, payload: { feed: GetFeedResponseInterface }): FeedStateInterface => {
    return ({
      ...state,
      isLoading: false,
      error: null,
      data: payload.feed
    });
  }),
  on(getFeedFailureAction, (state): FeedStateInterface => {
    return ({
      ...state,
      isLoading: false,
      error: 'Feed Error'
    });
  }),
  on(routerNavigationAction, (state): FeedStateInterface => initialValue)
);


export function reducers(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
};
