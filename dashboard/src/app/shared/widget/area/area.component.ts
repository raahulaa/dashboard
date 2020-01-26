import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  Highcharts = Highcharts;
  chartOption: {};

  constructor() { }

  ngOnInit() {
    this.chartOption = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Area chart with negative values'
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, -2, -3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, -2, 5]
      }]
  };

  HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
  }, 300);
  }

}
