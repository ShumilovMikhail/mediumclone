import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticleFormComponent } from "./article-form.component";
import { BackendErrorsMessagesModule } from "../backend-errors-messages/backend-errors-messages.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ArticleFormComponent],
  imports: [
    CommonModule,
    BackendErrorsMessagesModule,
    ReactiveFormsModule
  ],
  exports: [ArticleFormComponent]
})
export class ArticleFormModule { };
