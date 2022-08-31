import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  @Input()dona:boolean = false;
  @Input()ara:boolean = false;
  @Input()radar:boolean = false;
  @Input()polar:boolean = false;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'line';
  public barChartLegend= true;

  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    if(this.dona){
      this.barChartType = "doughnut"
    }
    if(this.ara){
      this.barChartType = "line"
    }
    if(this.radar){
      this.barChartType = "bubble"
    }
    if(this.polar){
      this.barChartType = "bar"
    }
  }
}
