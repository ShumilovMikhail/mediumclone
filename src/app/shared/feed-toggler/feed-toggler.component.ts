import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { isLoggedInSelector } from "../../auth/store/selectors";

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrl: './feed-toggler.component.scss'
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagName: string | null;

  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
  };
};
