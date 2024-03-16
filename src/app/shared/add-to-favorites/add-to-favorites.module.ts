import { NgModule } from "@angular/core";
import { AddToFavoritesComponent } from "./add-to-favorites.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { AddToFavoritesEffect } from "./store/effects/addToFavorites.effect";

@NgModule({
  declarations: [AddToFavoritesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature(AddToFavoritesEffect)
  ],
  exports: [AddToFavoritesComponent]
})
export class AddToFavoritesModule { }
