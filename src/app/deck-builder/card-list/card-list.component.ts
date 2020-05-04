import { Component, OnInit } from '@angular/core';
import { DataDragonService } from '@core';

@Component({
  selector: 'rgm-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  get cards() {
    return this.service.activeCardList;
  }

  constructor(private service: DataDragonService) { }

  ngOnInit() {
  }
}
