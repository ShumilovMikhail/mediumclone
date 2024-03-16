import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, filter, map } from "rxjs";

import { ArticleInputInterface } from "../shared/types/articleInput.interface";
import { errorsSelector, getArticleSelector, isLoadingSelector, isSubmittingSelector } from "./store/selectors";
import { ArticleInterface } from "../shared/types/article.interface";
import { BackendErrorsInterface } from "../auth/types/backendErrors.interface";
import { editArticleAction, getArticleAction } from "./store/actions/editArticle.action";

@Component({
  selector: 'mc-article-edit',
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.scss'
})
export class EditArticleComponent implements OnInit {

  initialValues$: Observable<ArticleInputInterface>;
  errors$: Observable<BackendErrorsInterface>;
  isSubmitting$: Observable<boolean>;
  isLoading: Observable<boolean>;

  private slug: string

  constructor(private store: Store, private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.initializeValues();
    this.fetchArticle();
  };

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(editArticleAction({ articleInput: articleInput, slug: this.slug }));
  };;

  private initializeValues() {
    this.errors$ = this.store.select(errorsSelector).pipe(
      map((error: string) => {
        return error ? { error: [error] } : null;
      })
    );

    this.initialValues$ = this.store.select(getArticleSelector).pipe(
      filter(Boolean),
      map((article: ArticleInterface): ArticleInputInterface => {
        return {
          title: article.title,
          body: article.body,
          description: article.description,
          tagList: article.tagList,
        };
      })
    )
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.isLoading = this.store.select(isLoadingSelector);
  }

  private fetchArticle(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  };;
};
