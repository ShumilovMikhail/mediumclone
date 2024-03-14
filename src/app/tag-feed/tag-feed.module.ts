import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TagFeedComponent } from "./tag-feed.component";
import { FeedModule } from "../shared/feed/feed.module";
import { BannerModule } from "../shared/banner/banner.module";
import { PopularTagsModule } from "../shared/popular-tags/popular-tags.module";
import { FeedTogglerModule } from "../shared/feed-toggler/feed-toggler.module";

const routes: Routes = [
  { path: 'tags/:tag', component: TagFeedComponent }
]

@NgModule({
  declarations: [TagFeedComponent],
  imports: [CommonModule, FeedModule, BannerModule, PopularTagsModule, FeedTogglerModule, RouterModule.forChild(routes)],
})
export class TagFeedModule { }
