import { CurrentUserInterface } from "../../shared/types/currentUser.interface"
import { BackendErrorsInterface } from "./backendErrors.interface"

export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean
  validationsErrors: BackendErrorsInterface | null
  isLoading: boolean
};
