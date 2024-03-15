import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { ArticleComponent } from "./article.component";
import { reducers } from "./store/reducers";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { LoadingModule } from "../shared/loading/loading.module";
import { ErrorMessageModule } from "../shared/error-message/error-message.module";
import { TagListModule } from "../shared/tag-list/tag-list.module";
import { DeleteArticleEffect } from "./store/effects/deleteArticle.effect";

const routes: Routes = [
  { path: 'articles/:slug', component: ArticleComponent }
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ]
})
export class ArticleModule { }
