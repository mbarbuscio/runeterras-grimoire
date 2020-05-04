import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListFilterComponent } from './card-list-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataDragonService } from '@core';

describe('CardListFilterComponent', () => {
  let component: CardListFilterComponent;
  let fixture: ComponentFixture<CardListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListFilterComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ DataDragonService ]
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