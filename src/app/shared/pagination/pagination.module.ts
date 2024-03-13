import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PaginationComponent } from "./pagination.component";

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterModule],
  exports: [PaginationComponent]
})
export class PaginationModule { }
