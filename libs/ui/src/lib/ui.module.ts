import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { ChartDirective } from './directives/chart/chart.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ChartWidgetComponent,
    ChartDirective
  ],
  exports: [
    ChartWidgetComponent,
    ChartDirective
  ]
})
export class UiModule {}
