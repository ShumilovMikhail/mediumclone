import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ProfileInterface } from "../../../shared/types/profile.interface";

@Component({
  selector: 'mc-user-profile-feed',
  templateUrl: './user-profile-feed.component.html',
  styleUrl: './user-profile-feed.component.scss'
})
export class UserProfileFeedComponent implements OnInit {
  @Input('userProfile') userProfile: ProfileInterface;
  apiUrl: string;
  slug: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeListeners();
  };

  private getApiUrl(): void {
    const isFavorite = this.router.url.includes('favorites');
    this.apiUrl = isFavorite ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;
  };

  private initializeListeners(): void {
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.getApiUrl();
    });
  };

};
