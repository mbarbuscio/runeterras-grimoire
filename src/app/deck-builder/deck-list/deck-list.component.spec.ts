import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckListComponent } from './deck-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataDragonService } from '@core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeckService } from 'src/app/core/services/deck.service';

describe('DeckListComponent', () => {
  let component: DeckListComponent;
  let fixture: ComponentFixture<DeckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckListComponent ],
      imports: [ HttpClientTestingModule, SharedModule ],
      providers: [ DataDragonService, DeckService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
