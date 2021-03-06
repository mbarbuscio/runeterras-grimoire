import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDragonService } from './services/data-dragon.service';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { HttpClientModule } from '@angular/common/http';
import { DeckService } from './services/deck.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
        ngModule: CoreModule,
        providers: [DataDragonService, DeckService]
    };
}
}
