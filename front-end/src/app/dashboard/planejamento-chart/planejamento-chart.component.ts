import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-planejamento-chart',
  templateUrl: './planejamento-chart.component.html',
  styleUrls: ['./planejamento-chart.component.css']
})
export class PlanejamentoChartComponent implements OnInit {

  constructor() { }
  
  public chartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{
      ticks: {
        maxRotation: 45,
        minRotation: 45
      }
    }], yAxes: [{}] },
    legend: {
      position: 'bottom',
    }
  };
  public chartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public chartType: ChartType = 'bar';
  public chartLegend = true;
  public chartPlugins = [];

  public chartData: ChartDataSets[] = [
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Realizado' },
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Planejado', type: 'line', fill: false, pointRadius: 0 },
  ];

  ngOnInit(): void {
  }

}
