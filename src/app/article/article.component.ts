import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription, combineLatestWith, map } from "rxjs";

import { ArticleInterface } from "../shared/types/article.interface";
import { articleSelector, errorSelector, isLoadingSelector } from "./store/selectors";
import { getArticleAction } from "./store/actions/getFeed.actions";
import { currentUserSelector } from "../auth/store/selectors";
import { CurrentUserInterface } from "../shared/types/currentUser.interface";


@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit, OnDestroy {

  article: ArticleInterface | null;

  isLoading$: Observable<boolean>;
  error$: Observable<string>;
  isAuthor$: Observable<boolean> = this.store.select(articleSelector).pipe(
    combineLatestWith(this.store.select(currentUserSelector)),
    map(([article, user]: [ArticleInterface | null, CurrentUserInterface | null]) => {
      return article.author.username === user.username
    })
  );;

  private articleSubscription: Subscription;
  private slug: string;

  constructor(private store: Store, private route: ActivatedRoute) { };


  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchArticle();
  };

  private initializeListeners(): void {
    this.articleSubscription = this.store.select(articleSelector).subscribe((article: ArticleInterface) => {
      this.article = article;
    });
  };

  private initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
  };

  private fetchArticle(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  };

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();

  };

};
