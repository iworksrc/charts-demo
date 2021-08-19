import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateRange } from '@charts-demo/models';

@Component({
  selector: 'charts-demo-toolbar-widget',
  templateUrl: './toolbar-widget.component.html',
  styleUrls: ['./toolbar-widget.component.scss']
})
export class ToolbarWidgetComponent implements OnInit {

  @Output() dataRange = new EventEmitter<DateRange>();

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  ngOnInit(): void {
    console.warn('not implemented');
  }

}
