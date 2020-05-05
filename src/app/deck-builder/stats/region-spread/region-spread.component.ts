import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rgm-region-spread',
  templateUrl: './region-spread.component.html',
  styleUrls: ['./region-spread.component.scss']
})
export class RegionSpreadComponent implements OnInit {

  @Input()
  regionSpread: any;

  constructor() { }

  ngOnInit() {
  }


  getClass() {
    const classes = {
      spread: true
    };

    const keys = Object.keys(this.regionSpread);
    if (keys.length > 1) {
      const leftPct = Math.round(
          Math.floor(
            this.regionSpread[keys[0]]
            / (this.regionSpread[keys[0]] + this.regionSpread[keys[1]])
            * 100)
          / 10)
        * 10;
      classes[`${keys[0].toLowerCase()}-1-${leftPct}`] = true;
      classes[`${keys[1].toLowerCase()}-2-${100 - leftPct}`] = true;
    } else if (keys.length > 0){
      classes[`${keys[0].toLowerCase()}-1-100`] = true;
      classes[`${keys[0].toLowerCase()}-2-100`] = true;
    }

    return classes;
  }

  getIconClass(ix: number) {
    const classes = {
      'rgm-icon': true,
      region: true
    };

    const keys = Object.keys(this.regionSpread);
    if (keys.length > 1) {
      classes[`${keys[ix - 1].toLowerCase()}`] = true;
    } else if (keys.length > 0) {
      if (ix === 1) {
        classes[`${keys[ix - 1].toLowerCase()}`] = true;
      }
    }
    return classes;
  }

  getCount(ix: number) {
    const keys = Object.keys(this.regionSpread);
    if (keys.length > 1) {
      return this.regionSpread[keys[ix - 1]] > 0 ? this.regionSpread[keys[ix - 1]] : '';
    }
    if (keys.length > 0) {
      if (ix === 1) {
        return this.regionSpread[keys[ix - 1]] > 0 ? this.regionSpread[keys[ix - 1]] : '';
      }
    }
  }
}
