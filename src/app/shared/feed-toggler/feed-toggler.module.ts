import { NgModule } from "@angular/core";
import { FeedTogglerComponent } from "./feed-toggler.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [FeedTogglerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FeedTogglerComponent]
})
export class FeedTogglerModule { }
