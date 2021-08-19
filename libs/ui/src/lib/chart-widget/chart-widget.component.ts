import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { Amounts } from '@charts-demo/models';

@Component({
  selector: 'charts-demo-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartWidgetComponent implements OnChanges, AfterViewInit {
  @Input() data: Amounts[] = [];
  @Input() showAxis = true;
  @Input() color = '#4682B4FF';
  @Input() axisColor = '#000000';
  @Input() setHeight = 300;
  @Input() setWidth = 600;

  @ViewChild('svgCanvas') svgCanvas: ElementRef;

  private svg: any;

  private g: any;
  private width: number;
  private height: number;
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };
  private x: any;
  private y: any;

  ngOnChanges(changes: SimpleChanges): void {
    const data = changes['data'];
    if (data?.firstChange) {
      return;
    }
    this.constructChart();
  }

  ngAfterViewInit(): void {
    this.constructChart();
  }


  private async initSvg() {
    this.svg?.selectAll('*').remove();
    this.svg = d3.select(this.svgCanvas.nativeElement);
    this.svg.attr('width', this.setWidth);
    this.svg.attr('height', this.setHeight);
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private initAxis() {
    if (!this.data) {
      return;
    }
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(this.data.map((d) => d.date));
    this.y.domain([0, d3Array.max(this.data, (d) => d.value)]);
  }

  private drawAxis() {
    if (!this.g) {
      return;
    }
    this.g.append('g')
      .attr('fill', this.axisColor)
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('fill', this.axisColor)
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('Frequency');
  }

  private drawBars() {
    if (!this.g) {
      return;
    }
    if (!this.data) {
      return;
    }
    this.g.selectAll('.bar')
      .data(this.data)
      .enter().append('rect')
      .attr('fill', this.color)
      .attr('x', (d: any) => this.x(d.date))
      .attr('y', (d: any) => this.y(d.value))
      .attr('width', this.x.bandwidth())
      .attr('height', (d: any) => this.height - this.y(d.value));
  }

  private constructChart() {
    this.initSvg();
    this.initAxis();
    if (this.showAxis) {
      this.drawAxis();
    }
    this.drawBars();
  }
}
