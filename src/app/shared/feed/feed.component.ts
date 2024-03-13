import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { getFeedAction } from "./store/actions/getFeed.actions";
import { errorSelector, feedSelector, isLoadingSelector } from "./store/selectors";
import { GetFeedResponseInterface } from "./types/getFeedResponse.interface";
import { environment } from "../../../environments/environment.development";

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrl: string;
  isLoading$: Observable<boolean>;
  feed$: Observable<GetFeedResponseInterface | null>;
  error$: Observable<string | null>;
  baseUrl: string;
  currentPage: number;
  limit = environment.limitArticles;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  };

  private initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.feed$ = this.store.select(feedSelector);
    this.error$ = this.store.select(errorSelector);
    this.baseUrl = this.router.url.split('?')[0];
  };

  private initializeListeners() {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.currentPage = +queryParams['page'] || 1
      this.fetchFeed();
    })
  }

  private fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    this.store.dispatch(getFeedAction({ url: this.apiUrl + `offset="${offset}"&limit="${this.limit}"` }));
  };

};
