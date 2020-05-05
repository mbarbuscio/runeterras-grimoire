import { Component, OnInit } from '@angular/core';
import { DataDragonService } from '@core';
import { DeckService } from 'src/app/core/services/deck.service';
import { Card } from '@models';

@Component({
  selector: 'rgm-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit {

  get cardsList() {
    return this.deck.activeDeck;
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
