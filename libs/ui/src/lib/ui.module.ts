import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { ChartDirective } from './directives/chart/chart.directive';
import { ToolbarWidgetComponent } from './toolbar-widget/toolbar-widget.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ChartWidgetComponent,
    ChartDirective,
    ToolbarWidgetComponent
  ],
  exports: [
    ChartWidgetComponent,
    ToolbarWidgetComponent,
    ChartDirective,
  ]
})
export class UiModule {}
