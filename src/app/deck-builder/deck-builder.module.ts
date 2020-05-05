import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeckBuilderRoutingModule } from './deck-builder-routing.module';
import { CardListComponent } from './card-list/card-list.component';
import { CardListFilterComponent } from './card-list-filter/card-list-filter.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { SharedModule } from '../shared/shared.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ShardCostComponent } from './stats/shard-cost/shard-cost.component';
import { RarityCountsComponent } from './stats/rarity-counts/rarity-counts.component';
import { RegionSpreadComponent } from './stats/region-spread/region-spread.component';



@NgModule({
  declarations: [CardListComponent, CardListFilterComponent, DeckListComponent, DeckBuilderComponent, ShardCostComponent, RarityCountsComponent, RegionSpreadComponent],
  imports: [
    CommonModule,
    DeckBuilderRoutingModule,
    SharedModule,
    ScrollingModule
  ],
  exports: [CardListComponent, CardListFilterComponent, DeckListComponent, DeckBuilderComponent]
})
export class DeckBuilderModule { }
