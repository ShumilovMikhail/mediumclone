import { Action, createReducer, on } from "@ngrx/store";

import { PopularTagsStateInterface } from "../types/popularTagsState.interface";
import { getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction } from "./actions/getPopularTags.action";
import { PopularTagType } from "../../types/popularTag.type";

const initialState: PopularTagsStateInterface = {
  isLoading: false,
  popularTags: null,
  errors: null
};


const popularTagsReducer = createReducer(initialState,
  on(getPopularTagsAction, (state): PopularTagsStateInterface => {
    return ({
      ...state,
      isLoading: true,
      errors: null
    });
  }),
  on(getPopularTagsSuccessAction, (state, payload: { tags: PopularTagType[] }): PopularTagsStateInterface => {
    return ({
      ...state,
      isLoading: false,
      popularTags: payload.tags,
      errors: null
    });
  }),
  on(getPopularTagsFailureAction, (state): PopularTagsStateInterface => {
    return ({
      ...state,
      isLoading: false,
      errors: 'Error in load popular tags'
    });
  }),
);

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action);
};
