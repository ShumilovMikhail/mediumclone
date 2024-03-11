import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "../../auth/types/backendErrors.interface";

@Component({
  selector: 'mc-backend-errors-messages',
  templateUrl: './backend-errors-messages.component.html',
  styleUrl: './backend-errors-messages.component.scss'
})
export class BackendErrorsMessages implements OnInit {
  @Input() backendErrors!: BackendErrorsInterface
  errorsMessages: string[] = []

  ngOnInit(): void {
    if (!this.backendErrors) {
      return
    }

    switch (typeof this.backendErrors) {
      case 'object':
        this.errorsMessages = [...Object.keys(this.backendErrors).map(error => {
          return `${error} - ${this.backendErrors![error].join(',')}`
        })]
        break
      case 'string':
        this.errorsMessages = [this.backendErrors]
    }
    console.log(this.backendErrors)
  }
}
