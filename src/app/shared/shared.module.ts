import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PreviewCardComponent } from './preview-card/preview-card.component';



@NgModule({
  declarations: [CardComponent, PreviewCardComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, PreviewCardComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
        ngModule: SharedModule,
        providers: []
    };
}
}
