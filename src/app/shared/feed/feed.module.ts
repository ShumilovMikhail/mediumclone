import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { FeedComponent } from "./feed.component";
import { GetFeedEffect } from "./store/effects/getFeed.effect";
import { reducers } from "./store/reducers";
import { ErrorMessageModule } from "../error-message/error-message.module";
import { LoadingModule } from "../loading/loading.module";
import { PaginationModule } from "../pagination/pagination.module";
import { ArticleComponent } from "./components/article/article.component";
import { TagListModule } from "../tag-list/tag-list.module";
import { AddToFavoritesModule } from "../add-to-favorites/add-to-favorites.module";

@NgModule({
  declarations: [FeedComponent, ArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule
  ],
  exports: [FeedComponent]
})
export class FeedModule { }
