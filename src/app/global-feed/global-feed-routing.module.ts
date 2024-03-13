import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GlobalFeedComponent } from "./global-feed.component";

const routes: Routes = [
  { path: '', component: GlobalFeedComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalFeedRouterModule { }
