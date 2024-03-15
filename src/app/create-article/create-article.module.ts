import { NgModule } from "@angular/core";
import { CreateArticleComponent } from "./create-article.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ArticleFormModule } from "../shared/article-form/article-form.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { CreateArticleEffect } from "./store/effects/createArticle.effect";

const routes: Routes = [
  { path: 'articles/new', component: CreateArticleComponent }
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    StoreModule.forFeature('createArticle', reducers),
    EffectsModule.forFeature([CreateArticleEffect])
  ],
})
export class CreateArticleModule { };
