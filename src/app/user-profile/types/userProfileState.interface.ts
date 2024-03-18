import { ProfileInterface } from "../../shared/types/profile.interface";

export interface UserProfileStateInterface {
  profile: ProfileInterface | null,
  isLoading: boolean,
  error: string | null
};
