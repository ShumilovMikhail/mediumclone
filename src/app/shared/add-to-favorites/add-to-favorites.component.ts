import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { addToFavoritesAction } from "./store/actions/addToFavorites.action";

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrl: './add-to-favorites.component.scss'
})
export class AddToFavoritesComponent {
  @Input('isFavorited') isFavorited: boolean;
  @Input('slug') slug: string;

  @Output('isFavorite') isFavoriteEvent = new EventEmitter<boolean>()

  constructor(private store: Store) { };

  onClick(): void {
    this.store.dispatch(addToFavoritesAction({ isFavorite: this.isFavorited, slug: this.slug }));
    this.isFavorited = !this.isFavorited
    this.isFavoriteEvent.emit(this.isFavorited)
  }
}
