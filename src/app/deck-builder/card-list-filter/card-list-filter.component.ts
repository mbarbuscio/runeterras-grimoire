import { Component, OnInit } from '@angular/core';
import { DataDragonService } from '@core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'rgm-card-list-filter',
  templateUrl: './card-list-filter.component.html',
  styleUrls: ['./card-list-filter.component.scss']
})
export class CardListFilterComponent implements OnInit {

  constructor(private service: DataDragonService) { }

  ngOnInit() {
  }

  get activeFilters() {
    return this.service.activeFilters;
  }

  filterRarity(rarity: string) {
    (this.service.activeFilters['rarity'] && this.service.activeFilters['rarity'].value === rarity) ? this.service.clearFilter('rarity') : this.service.filterCards(
      { key: 'rarity'
        , filterDef: (card, value) => card.rarity.toUpperCase() === value.toUpperCase()
        , value: rarity
      }
    );
  }

}
