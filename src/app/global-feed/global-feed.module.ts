import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { GlobalFeedComponent } from "./global-feed.component";
import { FeedModule } from "../shared/feed/feed.module";
import { GlobalFeedRouterModule } from "./global-feed-routing.module";
import { BannerModule } from "../shared/banner/banner.module";
import { HttpClientModule } from "@angular/common/http";
import { PopularTagsModule } from "../shared/popular-tags/popular-tags.module";
import { FeedTogglerModule } from "../shared/feed-toggler/feed-toggler.module";

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, FeedModule, GlobalFeedRouterModule, BannerModule, PopularTagsModule, FeedTogglerModule],
})
export class GlobalFeedModule { }
