import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { PopularTagsComponent } from "./popular-tags.component";
import { reducers } from "./store/reducers";
import { GetPopularTagsEffect } from "./store/effects/getPopularTags.effect";
import { LoadingModule } from "../loading/loading.module";
import { ErrorMessageModule } from "../error-message/error-message.module";

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    HttpClientModule,
    LoadingModule,
    ErrorMessageModule,
    RouterModule
  ],
  exports: [PopularTagsComponent]
})
export class PopularTagsModule { }
