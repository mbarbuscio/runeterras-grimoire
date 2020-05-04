import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderComponent } from './deck-builder.component';
import { CardListComponent } from '../card-list/card-list.component';
import { CardListFilterComponent } from '../card-list-filter/card-list-filter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataDragonService } from '@core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DeckBuilderComponent', () => {
  let component: DeckBuilderComponent;
  let fixture: ComponentFixture<DeckBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckBuilderComponent, CardListComponent, CardListFilterComponent ],
      providers: [ DataDragonService ],
      imports: [ SharedModule, ScrollingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
