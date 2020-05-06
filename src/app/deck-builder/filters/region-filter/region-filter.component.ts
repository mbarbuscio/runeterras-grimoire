import { Component, OnInit } from '@angular/core';
import { DataDragonService } from '@core';

@Component({
  selector: 'rgm-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrls: ['./region-filter.component.scss']
})
export class RegionFilterComponent implements OnInit {

  values = [];
  constructor(private dataDragon: DataDragonService) { }

  ngOnInit(): void {
  }

  toggle(region: string) {
    if (this.values.includes(region)) {
      this.values.splice(this.values.indexOf(region), 1);
    } else if (this.values.length < 2) {
      this.values.push(region);
    }
    if (this.values.length > 0) {
      this.dataDragon.filterCards(
        { key: 'regionRef',
        value: this.values,
        filterDef: (card, value) => value.includes(card.regionRef.toLowerCase())
      });
    } else {
      this.clear();
    }
  }

  disabled(region: string) {
    return this.values.length >= 2 && !this.values.includes(region);
  }

  isSelected(region: string) {
    return this.values.includes(region);
  }

  clear() {
    this.values = [];
    this.dataDragon.clearFilter('regionRef');
  }
}
