import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckBuilderComponent } from './deck-builder.component';
import { CardListComponent } from '../card-list/card-list.component';
import { CardListFilterComponent } from '../card-list-filter/card-list-filter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataDragonService } from '@core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeckListComponent } from '../deck-list/deck-list.component';
import { DeckService } from 'src/app/core/services/deck.service';
import { RarityCountsComponent } from '../stats/rarity-counts/rarity-counts.component';
import { ShardCostComponent } from '../stats/shard-cost/shard-cost.component';
import { RegionSpreadComponent } from '../stats/region-spread/region-spread.component';
import { CountsComponent } from '../stats/counts/counts.component';

describe('DeckBuilderComponent', () => {
  let component: DeckBuilderComponent;
  let fixture: ComponentFixture<DeckBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckBuilderComponent,
        CardListComponent,
        CardListFilterComponent,
        DeckListComponent,
        RegionSpreadComponent,
        RarityCountsComponent,
        ShardCostComponent,
        CountsComponent
      ],
      providers: [ DataDragonService, DeckService ],
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
