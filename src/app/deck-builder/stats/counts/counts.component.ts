import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rgm-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss']
})
export class CountsComponent implements OnInit {

  @Input() counts;

  constructor() { }

  ngOnInit() {
  }

}
