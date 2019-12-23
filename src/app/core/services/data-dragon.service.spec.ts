import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataDragonService } from './data-dragon.service';
import { Region } from '@models';
import { _globalsMock } from '@testing';

describe('DataDragonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ DataDragonService ]
  }));

  it('should be created', () => {
    const service: DataDragonService = TestBed.get(DataDragonService);
    expect(service).toBeTruthy();
  });

  it('should return regions', (done) => { //inject([HttpTestingController], (HttpTestingController)
    const service: DataDragonService = TestBed.get(DataDragonService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    service.getRegions().subscribe(regions => {
      expect(regions.length).toBe(1);
      expect(regions[0].abbreviation).toBe("NX");
      done();
    });

    const mockReq = httpMock.expectOne("./assets/data/globals-en_us.json");
    expect(mockReq.request.method).toBe("GET");
    mockReq.flush(_globalsMock);
    httpMock.verify();
  });
});
