import { Component, OnDestroy, OnInit } from "@angular/core";
import { ArticleInputInterface } from "../shared/types/articleInput.interface";
import { Observable, Subscription } from "rxjs";
import { BackendErrorsInterface } from "../auth/types/backendErrors.interface";
import { Store } from "@ngrx/store";
import { errorsSelector, isLoadingSelector } from "./store/selectors";
import { createArticleAction } from "./store/actions/createArticle.action";

@Component({
  selector: 'mc-article-create',
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.scss'
})
export class CreateArticleComponent implements OnInit, OnDestroy {

  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };

  isSubmitting: boolean = false

  errors: Observable<BackendErrorsInterface>;
  loadingSubscription: Subscription;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.errors = this.store.select(errorsSelector);
    this.initializeListeners();
  };

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(createArticleAction({ articleInput: articleInput }));
  };

  private initializeListeners(): void {
    this.loadingSubscription = this.store.select(isLoadingSelector).subscribe((isLoading: boolean) => {
      this.isSubmitting = isLoading;
    });
  };

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe()
  }
};
