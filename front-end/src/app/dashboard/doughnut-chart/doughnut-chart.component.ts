import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import 'chartjs-plugin-piechart-outlabels';
import 'chartjs-plugin-doughnutlabel';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  public doughnutChartLabels: Label[] = ['Comunidade', 'Emissor', 'Ec. Varejo', 'Credenciador', 'Portador']
  public doughnutChartType: any = 'doughnut';
  public doughnutChartData: ChartDataSets[] = [
    { data: [12, 19, 26, 21, 90] }
  ];

  public doughnutChartLegend = false;
  // public ambientesChartBarColor: Color[] = [
  //   {backgroundColor: '#5B9BD5'}
  // ]

  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    layout: {
      padding: 45
    },
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: '99 APIs',
            font: {
              size: 60,
              units: 'em',
              family: 'Arial, Helvetica, sans-serif',
              weight: 'bold',
              styles: 'word-break: normal;'
            },
            color: 'rgba(0,0,0)'
          }
        ]
      },
      outlabels: {
        text: '%l %p',
        color: 'black',
        stretch: 20,
        font: {
          resizable: true,
          minSize: 12,
          maxSize: 18
        },
        padding: 0,
        lineColor: 'rgba(0,0,0,0.5)',
        backgroundColor: 'rgba(0,0,0,0)'
      }
    }
  };

  ngOnInit(): void {
  }

}
