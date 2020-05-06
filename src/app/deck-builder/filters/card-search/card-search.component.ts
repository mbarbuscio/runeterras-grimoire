import { Component, OnInit } from '@angular/core';
import { Card } from '@models';
import { DataDragonService } from '@core';

@Component({
  selector: 'rgm-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {

  constructor(private dataDragon: DataDragonService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string) {
    if (searchTerm.length > 0) {
      this.dataDragon.filterCards(
        { key: 'searchAny',
        value: searchTerm,
        filterDef: (card: Card, value) => card.descriptionRaw.toLowerCase().includes(value.toLowerCase())
        || card.name.toLowerCase().includes(value.toLowerCase())
        || card.regionRef.toLowerCase().includes(value.toLowerCase())
        || card.region.toLowerCase().includes(value.toLowerCase())
        || card.levelupDescriptionRaw.toLowerCase().includes(value.toLowerCase())
        || card.keywordRefs.join('').toLowerCase().includes(value.toLowerCase())
      });
    } else {
      this.dataDragon.clearFilter('searchAny');
    }
  }
}
