import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { GlobalFeedComponent } from "./global-feed.component";
import { FeedModule } from "../shared/feed/feed.module";
import { GlobalFeedRouterModule } from "./global-feed-routing.module";
import { BannerModule } from "../shared/banner/banner.module";

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [CommonModule, FeedModule, GlobalFeedRouterModule, BannerModule],
})
export class GlobalFeedModule { }
