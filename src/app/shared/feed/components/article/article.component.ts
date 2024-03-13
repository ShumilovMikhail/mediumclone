import { Component, Input } from "@angular/core";

import { ArticleInterface } from "../../../types/article.interface";

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input('article') article: ArticleInterface
}
