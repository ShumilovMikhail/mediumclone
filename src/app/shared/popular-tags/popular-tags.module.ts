import { NgModule } from "@angular/core";
import { PopularTagsComponent } from "./popular-tags.component";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { EffectsModule } from "@ngrx/effects";
import { GetPopularTagsEffect } from "./store/effects/getPopularTags.effect";
import { HttpClientModule } from "@angular/common/http";
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
    ErrorMessageModule
  ],
  exports: [PopularTagsComponent]
})
export class PopularTagsModule { }
