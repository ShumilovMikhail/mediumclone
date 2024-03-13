import { Component, Input } from "@angular/core";

@Component({
  selector: 'mc-error-message',
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent {
  @Input('messageProps') messageProps: string = 'Something went wrong';
}
