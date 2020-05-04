import { TestBed } from '@angular/core/testing';

import { DeckService } from './deck.service';

describe('DeckService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ DeckService ]
  }));

  it('should be created', () => {
    const service: DeckService = TestBed.get(DeckService);
    expect(service).toBeTruthy();
  });
});
