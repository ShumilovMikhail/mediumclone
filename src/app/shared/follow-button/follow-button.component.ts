import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";

import { followAction } from "./store/actions/addToFavorites.action";

@Component({
  selector: 'mc-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrl: './follow-button.component.scss'
})
export class FollowButtonComponent {
  @Input('isFollow') isFollow: boolean;
  @Input('slug') slug: string;
  @Input('username') username: string;

  constructor(private store: Store) { };

  onClick() {
    this.store.dispatch(followAction({ isFollow: this.isFollow, slug: this.slug }));
    this.isFollow = !this.isFollow;
  };
};
