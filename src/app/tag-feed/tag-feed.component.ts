import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrl: './tag-feed.component.scss'
})
export class TagFeedComponent implements OnInit {
  tagName: string;
  apiUrl: string;

  constructor(private route: ActivatedRoute) { };

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.tagName = params['tag'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    })
  };
};
