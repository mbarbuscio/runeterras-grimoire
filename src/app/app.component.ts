import { Component } from '@angular/core';
import { DataDragonService } from './core/services/data-dragon.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

@Component({
  selector: 'rgm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Runeterra's Grimoire";

  cards = [];

  constructor(private data: DataDragonService) {
    this.data.filteredSetData(card => card.collectible).subscribe(cards => {
      this.cards = cards.sort((left, right) => 
        (left.region >= right.region) ? -1 : 1 );
    });
  }

}