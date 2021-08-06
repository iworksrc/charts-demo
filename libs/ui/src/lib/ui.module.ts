import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ChartWidgetComponent
  ],
  exports: [
    ChartWidgetComponent
  ]
})
export class UiModule {}
