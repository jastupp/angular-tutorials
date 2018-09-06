import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styles: [`
    .glyphicon { color: green }
  `],
  styleUrls: ['./favorite.component.css']

})
export class FavoriteComponent {

  private m_favorite: boolean = false;
  private m_change = new EventEmitter();


  @Input('is-favorite') get favorite() { return this.m_favorite; }
  set favorite(value) { this.m_favorite = value; }

  @Output('change') get changed() { return this.m_change; }

  onClick() {
    this.favorite = !this.favorite;
    this.changed.emit({state: this.favorite});
  }

}

export interface FavouriteChangedEvent {
  state: boolean
}

