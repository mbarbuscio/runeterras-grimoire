import { Injectable } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DeckService {

  private cardList$: BehaviorSubject<Array<Card>>;

  constructor() {
    this.cardList$ = new BehaviorSubject([]);
  }

  get activeDeck() {
    return this.cardList$ as Observable<Array<Card>>;
  }

  canAddCard(card: Card) {
    return this.cardList$.value.filter(deckCard => deckCard.cardCode === card.cardCode).length < 3;
  }

  canAddChampion() {
    return this.cardList$.value.filter(deckCard => deckCard.rarity === 'Champion').length < 6;
  }

  isFullDeck() {
    return this.cardList$.value.length < 40;
  }

  addCard(card: Card) {
    // tslint:disable-next-line: no-unused-expression
    !this.isFullDeck() && this.canAddCard(card) && (card.rarity !== 'Champion' || this.canAddChampion()) && this.pushCard(card);
  }

  private pushCard(card: Card) {
    this.cardList$.next([...this.cardList$.value, card]);
  }

  removeCard(card: Card) {
    this.cardList$.next(this.cardList$.value.splice(this.cardList$.value.indexOf(card), 1));
  }
}
