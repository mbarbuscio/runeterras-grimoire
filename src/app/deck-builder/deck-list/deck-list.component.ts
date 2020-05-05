import { Component, OnInit } from '@angular/core';
import { DataDragonService } from '@core';
import { DeckService } from 'src/app/core/services/deck.service';
import { Card } from '@models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rgm-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit {

  get cardsList() {
    return this.deck.activeDeck.pipe(
      map(deckList => deckList.sort((left, right) => left.card.cost < right.card.cost ? -1 : 1))
    );
  }

  get stats() {
    return this.deck.deckStats;
  }

  constructor(private deck: DeckService) { }

  ngOnInit() {
  }

  removeCard(card: Card) {
    this.deck.removeCard(card);
  }

}
