import { NgModule } from "@angular/core";
import { BackendErrorsMessagesComponent } from "./backend-errors-messages.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [BackendErrorsMessagesComponent],
  imports: [CommonModule],
  exports: [BackendErrorsMessagesComponent]
})
export class BackendErrorsMessagesModule { };
