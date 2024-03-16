import { BackendErrorsInterface } from "../../auth/types/backendErrors.interface"
import { ArticleInterface } from "../../shared/types/article.interface"

export interface EditArticleStateInterface {
  isLoading: boolean
  errors: string | null
  article: ArticleInterface | null
  isSubmitting: boolean
}
