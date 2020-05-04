import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'rgm-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {

  @Input() card: Card;

  @Input() count: number;

  constructor() { }

  ngOnInit() {
  }

  

}
