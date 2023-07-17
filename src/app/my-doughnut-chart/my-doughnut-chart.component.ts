import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-doughnut-chart',
  templateUrl: './my-doughnut-chart.component.html',
  styleUrls: ['./my-doughnut-chart.component.css']
})
export class MyDoughnutChartComponent {
  constructor(private http : HttpClient) {
  }

  public rowData: any;
  public salesData: ChartData<'bar'> | undefined;
  public groupByCategory: any;

  ngOnInit() {
    this.http.get<any>("https://dummyjson.com/products").subscribe(data => {
      this.rowData = data.products;
      this.groupByCategory = this.rowData.reduce((group: { [x: string]: any[]; }, product: { category: any; }) => {
        const { category } = product;
        group[category] = group[category] ?? [];
        group[category].push(product);
        return group;
      }, {});

      let keyValues = Object.keys(this.groupByCategory);
      let dataSetValues = [];
      for (let i=0; i<keyValues.length; i++) {
        dataSetValues.push(this.findData(keyValues[i]));
      }

      this.salesData =  {
        labels: keyValues,
        datasets: [{
          label: "Avg Rating of Individual Category Products",
          data: dataSetValues
        }]
      };

    })
  }

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Data',
      },
    },
  };

  findData(key: string): any {
    let dataValue: number = 0;
    this.groupByCategory[key].forEach((element: { rating: number; }) => {
      dataValue += element.rating;
    });
    dataValue = dataValue/this.groupByCategory[key].length;
    return Math.floor(dataValue);
  }
}
