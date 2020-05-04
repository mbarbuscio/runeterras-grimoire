import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListFilterComponent } from './card-list-filter.component';

describe('CardListFilterComponent', () => {
  let component: CardListFilterComponent;
  let fixture: ComponentFixture<CardListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
