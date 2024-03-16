import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { EditArticleComponent } from "./edit-article.component";
import { ArticleFormModule } from "../shared/article-form/article-form.module";
import { reducers } from "./store/reducers";
import { EditArticleEffect } from "./store/effects/editArticle.effect";
import { GetArticleEffect } from "./store/effects/getArticle.effect";
import { LoadingModule } from "../shared/loading/loading.module";

const routes: Routes = [
  { path: 'articles/:slug/edit', component: EditArticleComponent }
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    StoreModule.forFeature('editArticle', reducers),
    EffectsModule.forFeature([EditArticleEffect, GetArticleEffect]),
    LoadingModule
  ],
})
export class EditArticleModule { };
