import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Amounts } from '@charts-demo/models';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'charts-demo-chat-line-widget',
  templateUrl: './chat-line-widget.component.html',
  styleUrls: ['./chat-line-widget.component.scss']
})
export class ChatLineWidgetComponent implements OnInit {
  @Input() data: Amounts[] = [];
  @Input() showAxis = true;
  @Input() color = '#4682B4FF';
  @Input() axisColor = '#000000';
  @Input() setHeight = 300;
  @Input() setWidth = 600;

  // constructor() { }

  private svg: any;
  private g: any;
  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};
  private x: any;
  private y: any;
  private line: d3Shape.Line<[number, number]>;


  ngOnChanges(changes: SimpleChanges): void {
    const data = changes['data'];
    console.log('changes ==>', changes);
    if (data?.firstChange) {
      return;
    }
    this.constructChart();
  }

  ngOnInit(): void {
    this.constructChart();
  }


  private initSvg() {
    this.svg?.selectAll("*").remove();
    this.svg = d3.select('svg');
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    this.svg.attr('width', this.setWidth);
    this.svg.attr('height', this.setHeight);
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
  }

  private initAxis() {
    if (!this.data) {
      return
    }
    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.data, (d) => new Date(d.date) ));
    this.y.domain(d3Array.extent(this.data, (d) => d.value ));
  }

  private drawAxis() {
    if (!this.g) {
      return;
    }
    this.svg.append('g')
      .attr('fill', this.axisColor)
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));

    this.svg.append('g')
      .attr('fill', this.axisColor)
      .call(d3Axis.axisLeft(this.y))
      .append('text')
      .attr('fill', this.axisColor)
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('volume (ton)');
  }

  private drawLine() {
    if (!this.g) {
      return
    }
    if (!this.data) {
      return
    }

    this.line = d3Shape.line()
      .x( (d: any) => this.x(new Date(d.date)))
      .y( (d: any) => this.y(d.value));

    this.svg.append('path')
      .datum(this.data.map((d) => {
        return { date: new Date(d.date), value: d.value }
      }))
      .attr('fill', 'none')
      .attr('stroke', this.color)
      .attr('shape-rendering', 'crispEdges')
      .attr('stroke-width', '2px')
      .attr('d', this.line);
  }

  private constructChart() {
    this.initSvg();
    this.initAxis();
    if(this.showAxis) {
      this.drawAxis();
    }
    this.drawLine();
  }
}
