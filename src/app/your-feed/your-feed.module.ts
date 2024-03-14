import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FeedModule } from "../shared/feed/feed.module";
import { BannerModule } from "../shared/banner/banner.module";
import { PopularTagsModule } from "../shared/popular-tags/popular-tags.module";
import { FeedTogglerModule } from "../shared/feed-toggler/feed-toggler.module";
import { YourFeedComponent } from "./your-feed.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: 'feed', component: YourFeedComponent }
]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [CommonModule, FeedModule, BannerModule, PopularTagsModule, FeedTogglerModule, RouterModule.forChild(routes)],
})
export class YourFeedModule { }
