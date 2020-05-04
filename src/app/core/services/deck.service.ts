import { Injectable } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { DeckCard } from '@models';

@Injectable()
export class DeckService {

  private cardList$: BehaviorSubject<Array<DeckCard>>;

  constructor() {
    this.cardList$ = new BehaviorSubject([]);
  }

  get activeDeck() {
    return this.cardList$ as Observable<Array<DeckCard>>;
  }

  get deckRegions() {
    return this.cardList$.value.map(deckCard => deckCard.card.regionRef).reduce((left, right) => {
      if (!left.includes(right)) {
        left.push(right);
      }
      return left;
    }, []);
  }

  private validateRegion(card: Card) {
    if (this.deckRegions.length >= 2) {
      return this.deckRegions.includes(card.regionRef);
    }
    return true;
  }

  canAddCard(card: Card) {
    const findCard = this.cardList$.value.find(deckCard => deckCard.card.cardCode === card.cardCode);
    return findCard ? findCard.count < 3 : true;
  }

  canAddChampion() {
    return this.cardList$.value
      .filter(deckCard => deckCard.card.rarity === 'Champion')
      .map(deckCard => deckCard.count)
      .reduce((left, right) => left + right, 0) < 6;
  }

  isFullDeck() {
    return this.cardList$.value.length === 40;
  }

  addCard(card: Card) {
    // tslint:disable-next-line: no-unused-expression
    !this.isFullDeck()
      && this.validateRegion(card)
      && this.canAddCard(card)
      && (card.rarity !== 'Champion' || this.canAddChampion())
      && this.pushCard(card);
  }

  private pushCard(card: Card) {
    if (this.cardList$.value.find(deckCard => deckCard.card.cardCode === card.cardCode)) {
      const newDeck = this.cardList$.value;
      newDeck.find(deckCard => deckCard.card.cardCode === card.cardCode).count += 1;
      this.cardList$.next(newDeck);
    } else {
      this.cardList$.next([...this.cardList$.value, { card, count: 1}]);
    }
  }

  removeCard(card: Card) {
    if (this.cardList$.value.find(deckCard => deckCard.card.cardCode === card.cardCode) 
    && this.cardList$.value.find(deckCard => deckCard.card.cardCode === card.cardCode).count > 1) {
      const newDeck = this.cardList$.value;
      newDeck.find(deckCard => deckCard.card.cardCode === card.cardCode).count -= 1;
      this.cardList$.next(newDeck);
    } else {
      const newDeck = this.cardList$.value;
      newDeck.splice(
        newDeck.indexOf(
          newDeck.find(deckCard => deckCard.card.cardCode === card.cardCode)
      ), 1);
      this.cardList$.next(newDeck);
    }
  }
}
