import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDragonService } from './services/data-dragon.service';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { HttpClientModule } from '@angular/common/http';

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

  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [DataDragonService]
    }
  }
}
