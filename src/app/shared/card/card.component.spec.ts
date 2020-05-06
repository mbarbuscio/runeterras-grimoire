import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { _cardMock } from '@testing';
import { Card } from 'src/app/models/card.model';
import { DeckService } from 'src/app/core/services/deck.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      providers: [ DeckService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.card = new Card().deserialize(_cardMock);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
