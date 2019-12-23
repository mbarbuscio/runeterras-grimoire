import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DataDragonService {

  constructor(private http: HttpClient) {
  }

  private getGlobals() {
    return this.http.get("./assets/data/globals-en_us.json").pipe(
      map((res: any) => {
        return res;
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
