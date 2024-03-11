import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { CurrentUserInterface } from "../types/currentUser.interface";
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector } from "../../auth/store/selectors";

@Component({
  selector: 'mc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.initializeValues();
  };

  private initializeValues(): void {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector);
    this.isAnonymous$ = this.store.select(isAnonymousSelector);
    this.currentUser$ = this.store.select(currentUserSelector);
  };
};
