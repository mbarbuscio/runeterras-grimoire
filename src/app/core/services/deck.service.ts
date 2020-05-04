import { Injectable } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { BehaviorSubject, Observable, empty } from 'rxjs';
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

  private get deckRegions() {
    return this.cardList$.value.map(deckCard => deckCard.card.regionRef).reduce((left, right) => {
      if (!left.includes(right)) {
        left.push(right);
      }
      return left;
    }, []);
  }

  private get regionSpread() {
    const regionSpread = this.cardList$.value
      .map(deckCard => ({ region: deckCard.card.regionRef, count: deckCard.count }))
      .reduce((left, right) => {
        if (left[right.region]) {
          left[right.region] += right.count;
        } else {
          left[right.region] = right.count;
        }
        return left;
    }, {});
    return regionSpread;
  }

  private get manaCurve() {
    const emptyCurve = [];
    for (let i = 0; i <= 12; i++) {
      emptyCurve[i] = 0;
    }

    return this.cardList$.value
      .map(deckCard => ({ cost: deckCard.card.cost, count: deckCard.count }))
      .reduce((left, right) => {
        left[right.cost] += right.count;
        return left;
      }
    , emptyCurve);
  }

  private get rarityCount() {
    const rarityCounts = {
      COMMON: 0,
      RARE: 0,
      EPIC: 0,
      CHAMPION: 0
    };

    return this.cardList$.value
    .map(deckCard => ({ rarity: deckCard.card.rarityRef, count: deckCard.count }))
    .reduce((left, right) => {
      left[right.rarity.toUpperCase()] += right.count;
      return left;
    }, rarityCounts);
  }

  private get shardCost() {
    return this.rarityCount.CHAMPION * 3000
      + this.rarityCount.COMMON * 100
      + this.rarityCount.RARE * 300
      + this.rarityCount.EPIC * 1200;
  }

  private get cardCount() {
    return this.cardList$.value
      .map(deckCard => deckCard.count)
      .reduce((left, right) => {
        return left + right;
    }, 0);
  }

  private get championCount() {
    return this.cardList$.value
      .filter(deckCard => deckCard.card.rarityRef.toUpperCase() === 'CHAMPION')
      .map(deckCard => deckCard.count)
      .reduce((left, right) => {
        return left + right;
    }, 0);
  }

  get deckStats() {
    return {
      regions: this.deckRegions,
      regionSpread: this.regionSpread,
      manaCurve: this.manaCurve,
      rarityCount: this.rarityCount,
      shardCost: this.shardCost,
      cardCount: this.cardCount,
      championCount: this.championCount
    };
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
