import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap, take } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Region, Globals, Keyword, SpellSpeed, Rarity } from '@models';
import { Card } from 'src/app/models/card.model';
import { FilterDefinition } from 'src/app/models/filter-definition.model';

@Injectable()
export class DataDragonService {

  public activeFilters: Array<FilterDefinition> = [];

  public get activeCardList() {
    return this.activeCardList$ as Observable<Array<Card>>;
  }

  private activeCardList$: BehaviorSubject<Array<Card>>;

  constructor(private http: HttpClient) {
    this.activeCardList$ = new BehaviorSubject<Array<Card>>([]);
    this.filteredSetData(card => card.collectible).pipe(
      take(1),
      tap(allCards => {
        this.activeCardList$.next(allCards);
      })
    ).subscribe();
  }

  public filterCards(filterDef: FilterDefinition) {
    this.activeFilters[filterDef.key] = filterDef;
    this.applyFilters();
  }

  public clearFilter(key: string) {
    delete this.activeFilters[key];
    this.applyFilters();
  }

  private applyFilters() {
    this.filteredSetData(card => card.collectible).pipe(
      take(1),
      tap(allCards => {
        this.activeCardList$.next(allCards.filter(card => {
          let doFilter = true;
          // tslint:disable-next-line: forin
          for (const key in this.activeFilters) {
            // tslint:disable-next-line: no-unused-expression
            doFilter = doFilter && this.activeFilters[key].filterDef(card, this.activeFilters[key].value)
          }
          return doFilter;
        }));
      })
    ).subscribe();
  }

  public getRegions() : Observable<Region[]> {
    return this.getGlobals().pipe(
      map(response => {
        return response.regions;
      })
    );
  }

  public getKeywords() : Observable<Keyword[]> {
    return this.getGlobals().pipe(
      map(response => {
        return response.keywords;
      })
    );
  }

  public getSpellSpeeds() : Observable<SpellSpeed[]> {
    return this.getGlobals().pipe(
      map(response => {
        return response.spellSpeeds;
      })
    );
  }

  public getRarities() : Observable<Rarity[]> {
    return this.getGlobals().pipe(
      map(response => {
        return response.rarities;
      })
    );
  }

  private getGlobals() : Observable<Globals> {
    return this.http.get('./assets/data/globals-en_us.json').pipe(
      map((res: any) => {
        return new Globals().deserialize(res);
      })
    )
  }

  private getSetData(): Observable<Array<Card>> {
    return this.http.get<Array<Card>>('./assets/data/set1-en_us.json').pipe(
      map((res) => {
        return res.map(item => new Card().deserialize(item)).sort((left, right) =>  left.cost <= right.cost ? -1 : 1);
      })
    )
  }

  public filteredSetData(filterPredicate): Observable<Array<Card>> {
    return this.getSetData().pipe(
      map(setData => {
        return setData.filter(card => filterPredicate(card));
      })
    );
  }

}
