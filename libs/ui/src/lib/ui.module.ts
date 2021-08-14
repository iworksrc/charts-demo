import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';
import { ChartDirective } from './directives/chart/chart.directive';
import { ToolbarWidgetComponent } from './toolbar-widget/toolbar-widget.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatLineWidgetComponent } from './chat-line-widget/chat-line-widget.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChartWidgetComponent,
    ChartDirective,
    ToolbarWidgetComponent,
    ChatLineWidgetComponent
  ],
  exports: [
    ChartWidgetComponent,
    ToolbarWidgetComponent,
    ChartDirective,
    ChatLineWidgetComponent
  ]
})
export class UiModule {}
