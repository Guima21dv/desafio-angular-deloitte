import { DoughnutData } from './../../shared/interfaces/DoughnutData';
import { DashboardService } from './../../services/dashboard.service';
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

  constructor(private dashboardService: DashboardService) { }

  dadosCarregados = false;
  quantidadeApis = 0;
  public chartLabels: Label[] = ['Comunidade', 'Emissor', 'Ec. Varejo', 'Credenciador', 'Portador']
  public doughnutChartType: any = 'doughnut';
  public chartData: ChartDataSets[] = [];

  public doughnutChartLegend = false;

  public doughnutChartOptions: ChartOptions;

  ngOnInit(): void {
    this.dashboardService.getDoughnut().subscribe(response => {
      this.loadChartDataSetAndLabels(response);
      this.configureChart();
      this.dadosCarregados = true;
      console.log(this.chartData)
    }, error => alert('Ocorreu um erro ao carregar os dados'));
  }

  loadChartDataSetAndLabels(data: DoughnutData[]): void {
    const labels = data.map(value => value.label);
    const qtd = data.map(value => value.quantidade);
    this.chartLabels = labels;
    this.chartData.push({data: qtd});
    this.quantidadeApis = qtd.reduce((prevValue, currentValue) => prevValue + currentValue);
  }

  configureChart(): void{
    this.doughnutChartOptions  = {
      responsive: true,
      layout: {
        padding: 45
      },
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: `${this.quantidadeApis} APIs`,
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
  }

}
