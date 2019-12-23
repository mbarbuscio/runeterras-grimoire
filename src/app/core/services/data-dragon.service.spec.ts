import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataDragonService } from './data-dragon.service';

describe('DataDragonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ DataDragonService ]
  }));

  it('should be created', () => {
    const service: DataDragonService = TestBed.get(DataDragonService);
    expect(service).toBeTruthy();
  });
});
