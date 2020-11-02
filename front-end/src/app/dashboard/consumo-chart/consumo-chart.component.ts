import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-consumo-chart',
  templateUrl: './consumo-chart.component.html',
  styleUrls: ['./consumo-chart.component.css']
})
export class ConsumoChartComponent implements OnInit {

  constructor() { }
  public consumoChartLabels: Label[] = ['Ec. Varejo', 'Portador', 'Credenciador', 'Emissor', 'Comunidade']
  public consumoChartType: ChartType = 'horizontalBar';
  public consumoChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', stack: 'a' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', stack: 'a' },
    { data: [8, 18, 30, 69, 16, 23, 20], label: 'Series c', stack: 'a' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series d', stack: 'a' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series e', stack: 'a' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series f', stack: 'a' }
  ];

  public consumoChartLegend = true;
  public consumoChartBarColor: Color[] = [
    {backgroundColor: '#83CED4'},
    {backgroundColor: '#7A9DB2'},
    {backgroundColor: '#6CC99B'},
    {backgroundColor: '#CEA521'},
    {backgroundColor: '#D85B00'},
    {backgroundColor: '#CA534B'},
  ]

  public consumoChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    }
  };
  ngOnInit(): void {
  }

}
