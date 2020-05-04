import { Component, OnInit } from '@angular/core';
import { DataDragonService } from '@core';

@Component({
  selector: 'rgm-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit {

  cards = [];

  constructor(private service: DataDragonService) { }

  ngOnInit() {
    this.service.filteredSetData(card => card.collectible).subscribe(cardList => {
      this.cards = cardList;
    });
  }

}
