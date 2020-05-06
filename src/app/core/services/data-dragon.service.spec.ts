import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataDragonService } from './data-dragon.service';
import { _globalsMock, _setDataMock } from '@testing';
import { tap, filter } from 'rxjs/operators';

describe('DataDragonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ DataDragonService ]
    });
  });

  it('should be created', () => {
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    const service: DataDragonService = TestBed.get(DataDragonService);
    const mockSetReq = httpMock.expectOne('./assets/data/set1-en_us.json');
    const mockSet2Req = httpMock.expectOne('./assets/data/set2-en_us.json');
    expect(mockSetReq.request.method).toBe('GET');
    expect(mockSet2Req.request.method).toBe('GET');
    mockSetReq.flush(_setDataMock);
    mockSet2Req.flush(_setDataMock);
    httpMock.verify();

    expect(service).toBeTruthy();
  });

  it('should return regions', (done) => {
    const service: DataDragonService = TestBed.get(DataDragonService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    const mockSetReq = httpMock.expectOne('./assets/data/set1-en_us.json');
    const mockSet2Req = httpMock.expectOne('./assets/data/set2-en_us.json');
    expect(mockSetReq.request.method).toBe('GET');
    expect(mockSet2Req.request.method).toBe('GET');
    mockSetReq.flush(_setDataMock);
    mockSet2Req.flush(_setDataMock);

    service.getRegions().subscribe(keywords => {
      expect(keywords.length).toBe(1);
      expect(keywords[0].abbreviation).toBe('NX');
      done();
    });

    const mockReq = httpMock.expectOne('./assets/data/globals-en_us.json');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(_globalsMock);
    httpMock.verify();
  });

  it('should return keywords', (done) => {
    const service: DataDragonService = TestBed.get(DataDragonService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    const mockSetReq = httpMock.expectOne('./assets/data/set1-en_us.json');
    const mockSet2Req = httpMock.expectOne('./assets/data/set2-en_us.json');
    expect(mockSetReq.request.method).toBe('GET');
    expect(mockSet2Req.request.method).toBe('GET');
    mockSetReq.flush(_setDataMock);
    mockSet2Req.flush(_setDataMock);

    service.getKeywords().subscribe(keywords => {
      expect(keywords.length).toBe(1);
      expect(keywords[0].nameRef).toBe('Obliterate');
      done();
    });

    const mockReq = httpMock.expectOne('./assets/data/globals-en_us.json');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(_globalsMock);
    httpMock.verify();
  });

  it('should return rarities', (done) => {
    const service: DataDragonService = TestBed.get(DataDragonService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    const mockSetReq = httpMock.expectOne('./assets/data/set1-en_us.json');
    const mockSet2Req = httpMock.expectOne('./assets/data/set2-en_us.json');
    expect(mockSetReq.request.method).toBe('GET');
    expect(mockSet2Req.request.method).toBe('GET');
    mockSetReq.flush(_setDataMock);
    mockSet2Req.flush(_setDataMock);

    service.getRarities().subscribe(rarities => {
      expect(rarities.length).toBe(1);
      expect(rarities[0].nameRef).toBe('Common');
      done();
    });

    const mockReq = httpMock.expectOne('./assets/data/globals-en_us.json');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(_globalsMock);
    httpMock.verify();
  });

  it('should return spell speeds', (done) => {
    const service: DataDragonService = TestBed.get(DataDragonService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    const mockSetReq = httpMock.expectOne('./assets/data/set1-en_us.json');
    const mockSet2Req = httpMock.expectOne('./assets/data/set2-en_us.json');
    expect(mockSetReq.request.method).toBe('GET');
    expect(mockSet2Req.request.method).toBe('GET');
    mockSetReq.flush(_setDataMock);
    mockSet2Req.flush(_setDataMock);

    service.getSpellSpeeds().subscribe(spellSpeeds => {
      expect(spellSpeeds.length).toBe(1);
      expect(spellSpeeds[0].nameRef).toBe('Slow');
      done();
    });

    const mockReq = httpMock.expectOne('./assets/data/globals-en_us.json');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(_globalsMock);
    httpMock.verify();
  });

  it('should return collectible cards', (done) => {
    const service: DataDragonService = TestBed.get(DataDragonService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);
    
    const mockSetReq = httpMock.expectOne('./assets/data/set1-en_us.json');
    const mockSet2Req = httpMock.expectOne('./assets/data/set2-en_us.json');
    expect(mockSetReq.request.method).toBe('GET');
    expect(mockSet2Req.request.method).toBe('GET');
    mockSetReq.flush(_setDataMock);
    mockSet2Req.flush(_setDataMock);
    
    service.filteredSetData(card => card.collectible).pipe(
      tap(filteredCards => {
        expect(filteredCards.length).toEqual(2);
        done();
      })
    ).subscribe();

    const mockSetReq2 = httpMock.expectOne('./assets/data/set1-en_us.json');
    const mockSet2Req2 = httpMock.expectOne('./assets/data/set2-en_us.json');
    expect(mockSetReq2.request.method).toBe('GET');
    expect(mockSet2Req2.request.method).toBe('GET');
    mockSetReq2.flush(_setDataMock);
    mockSet2Req2.flush(_setDataMock);
  });
});
