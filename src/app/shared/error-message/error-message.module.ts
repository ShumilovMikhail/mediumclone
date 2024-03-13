import { NgModule } from "@angular/core";

import { ErrorMessageComponent } from "./error-message.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [CommonModule],
  exports: [ErrorMessageComponent]
})
export class ErrorMessageModule { };
