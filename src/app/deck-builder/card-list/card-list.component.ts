import { Component, OnInit } from '@angular/core';
import { DataDragonService } from '@core';
import { DeckService } from 'src/app/core/services/deck.service';
import { Card } from '@models';

@Component({
  selector: 'rgm-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  get cards() {
    return this.service.activeCardList;
  }

  constructor(private service: DataDragonService, private deck: DeckService) { }

  ngOnInit() {
  }

  addCard(card: Card) {
    this.deck.addCard(card);
  }
}
