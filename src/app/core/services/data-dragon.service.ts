import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Region, Globals } from '@models';

@Injectable()
export class DataDragonService {

  constructor(private http: HttpClient) {
  }

  public getRegions() : Observable<Region[]> {
    return this.getGlobals().pipe(
      map(response => {
        return response.regions;
      })
    )
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
