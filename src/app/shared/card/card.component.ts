import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { DeckService } from 'src/app/core/services/deck.service';

@Component({
  selector: 'rgm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  @HostBinding('class.disabled') get disabled() { return this.deck.isFullDeck() || !this.deck.canAddCard(this.card); }
  constructor(private deck: DeckService) { }

  ngOnInit() {
  }



}
