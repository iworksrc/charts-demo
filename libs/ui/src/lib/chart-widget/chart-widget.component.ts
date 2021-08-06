import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'charts-demo-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartWidgetComponent implements OnInit {

  @Input() data: any;

  // constructor() { }

  ngOnInit(): void {
    //todo not implemented
    console.warn('not implemented');
  }

}
