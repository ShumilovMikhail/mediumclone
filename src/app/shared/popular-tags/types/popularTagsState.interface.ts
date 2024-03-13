import { PopularTagType } from "../../types/popularTag.type";

export interface PopularTagsStateInterface {
  isLoading: boolean,
  popularTags: PopularTagType[] | null,
  errors: string | null
};
