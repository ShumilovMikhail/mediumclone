import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingsComponent } from "./setting.component";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { ReactiveFormsModule } from "@angular/forms";
import { BackendErrorsMessagesModule } from "../shared/backend-errors-messages/backend-errors-messages.module";

const routes: Routes = [
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    BackendErrorsMessagesModule
  ]
})
export class SettingsModule { };
