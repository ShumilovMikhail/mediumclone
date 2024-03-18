import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { UserProfileComponent } from "./user-profile.component";
import { GetUserProfileEffect } from "./store/effects/getUserProfile.effect";
import { reducers } from "./store/reducers";
import { UserProfileFeedComponent } from "./components/user-profile-feed/user-profile-feed.component";
import { FeedModule } from "../shared/feed/feed.module";

const routes: Routes = [
  { path: 'profiles/:slug', component: UserProfileComponent },
  { path: 'profiles/:slug/favorites', component: UserProfileComponent }
]

@NgModule({
  declarations: [UserProfileComponent, UserProfileFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule
  ]
})
export class UserProfileModule { }
