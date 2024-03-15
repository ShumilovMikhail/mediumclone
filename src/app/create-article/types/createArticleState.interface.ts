import { BackendErrorsInterface } from "../../auth/types/backendErrors.interface"

export interface CreateArticleStateInterface {
  isLoading: boolean
  errors: BackendErrorsInterface | null
}
