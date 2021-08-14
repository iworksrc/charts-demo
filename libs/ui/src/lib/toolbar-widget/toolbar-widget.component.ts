import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'charts-demo-toolbar-widget',
  templateUrl: './toolbar-widget.component.html',
  styleUrls: ['./toolbar-widget.component.scss']
})
export class ToolbarWidgetComponent implements OnInit {

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  ngOnInit(): void {
    console.warn('not implemented');
  }

}
