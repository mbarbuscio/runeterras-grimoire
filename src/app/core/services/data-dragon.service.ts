import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Region, Globals, Keyword, SpellSpeed, Rarity } from '@models';

@Injectable()
export class DataDragonService {

  constructor(private http: HttpClient) {
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
    return this.http.get("./assets/data/globals-en_us.json").pipe(
      map((res: any) => {
        return new Globals().deserialize(res);
      })
    )
  }

  private getSetData() {
    return this.http.get("./assets/data/set1-en_us.json").pipe(
      map((res: any) => {
        return res;
      })
    )
  }

}
