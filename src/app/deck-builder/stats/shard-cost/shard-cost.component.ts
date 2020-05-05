import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rgm-shard-cost',
  templateUrl: './shard-cost.component.html',
  styleUrls: ['./shard-cost.component.scss']
})
export class ShardCostComponent implements OnInit {

  @Input() cost = 0;

  constructor() { }

  ngOnInit() {
  }

}
