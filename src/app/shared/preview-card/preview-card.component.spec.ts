import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCardComponent } from './preview-card.component';
import { _cardMock } from '@testing';
import { Card } from 'src/app/models/card.model';

describe('PreviewCardComponent', () => {
  let component: PreviewCardComponent;
  let fixture: ComponentFixture<PreviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCardComponent);
    component = fixture.componentInstance;
    component.card = new Card().deserialize(_cardMock);
    component.count = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
