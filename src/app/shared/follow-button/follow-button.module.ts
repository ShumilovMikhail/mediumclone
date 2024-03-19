import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";

import { FollowButtonComponent } from "./follow-button.component";
import { FollowEffect } from "./store/effects/addToFavorites.effect";

@NgModule({
  declarations: [FollowButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature(FollowEffect)
  ],
  exports: [FollowButtonComponent]
})
export class FollowButtonModule { };
