import { Component, OnInit } from "@angular/core";
import { PopularTagType } from "../types/popularTag.type";
import { Store } from "@ngrx/store";
import { getPopularTagsAction } from "./store/actions/getPopularTags.action";
import { errorsSelector, isLoadingSelector, popularTagsSelector } from "./store/selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrl: './popular-tags.component.scss',
})
export class PopularTagsComponent implements OnInit {
  tags$: Observable<PopularTagType[]> | null;
  isLoading$: Observable<boolean>;
  errorsMessage$: Observable<string> | null

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getPopularTagsAction());
    this.tags$ = this.store.select(popularTagsSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.errorsMessage$ = this.store.select(errorsSelector);
  }
}