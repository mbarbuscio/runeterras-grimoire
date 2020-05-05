import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rgm-rarity-counts',
  templateUrl: './rarity-counts.component.html',
  styleUrls: ['./rarity-counts.component.scss']
})
export class RarityCountsComponent implements OnInit {

  constructor() { }

  @Input() counts;

  ngOnInit() {
  }

}
