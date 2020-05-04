import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeckBuilderRoutingModule } from './deck-builder-routing.module';
import { CardListComponent } from './card-list/card-list.component';
import { CardListFilterComponent } from './card-list-filter/card-list-filter.component';
import { DeckListComponent } from './deck-list/deck-list.component';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';
import { SharedModule } from '../shared/shared.module';
import {ScrollingModule} from '@angular/cdk/scrolling';



@NgModule({
  declarations: [CardListComponent, CardListFilterComponent, DeckListComponent, DeckBuilderComponent],
  imports: [
    CommonModule,
    DeckBuilderRoutingModule,
    SharedModule,
    ScrollingModule
  ]
})
export class DeckBuilderModule { }
