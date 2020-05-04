import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckBuilderComponent } from './deck-builder/deck-builder.component';


const routes: Routes = [
  { path: '', component: DeckBuilderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeckBuilderRoutingModule { }
