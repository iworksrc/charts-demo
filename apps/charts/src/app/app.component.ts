import { Component } from '@angular/core';
import { Amounts, DateRange } from '@charts-demo/models';
import { PERIOD1, PERIOD2 } from '@charts-demo/mocks';
@Component({
  selector: 'charts-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  filteredData: Amounts[] = [];

  doFiltering($event: DateRange) {
    this.filteredData = [...PERIOD2]; //todo just for test purposes
  }
}
