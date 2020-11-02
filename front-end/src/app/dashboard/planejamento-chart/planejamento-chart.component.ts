import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { PlanejamentoData } from 'src/app/shared/interfaces/PlanejamentoData';

@Component({
  selector: 'app-planejamento-chart',
  templateUrl: './planejamento-chart.component.html',
  styleUrls: ['./planejamento-chart.component.css']
})
export class PlanejamentoChartComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  dadosCarregados = false;
  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          maxRotation: 45,
          minRotation: 45
        }
      }], yAxes: [{}]
    },
    legend: {
      position: 'bottom',
    }
  };
  public chartLabels: Label[] = [];
  public chartType: ChartType = 'bar';
  public chartLegend = true;

  public chartData: ChartDataSets[] = [];

  ngOnInit(): void {
    this.dashboardService.getPlanejamento().subscribe(response => {
      this.loadChartDataSetAndLabels(response);
      this.dadosCarregados = true;
    }, error => alert('Ocorreu um erro ao carregar os dados'));
  }

  loadChartDataSetAndLabels(data: PlanejamentoData[]): void {
    const labels = data.map(value => value.label);
    const realizado = data.map(value => value.realizado);
    const planejado = data.map(value => value.planejado);
    this.chartLabels = labels;
    this.chartData.push({data: planejado, label: 'Planejado', type: 'line', fill: false, pointRadius: 0});
    this.chartData.push({data: realizado, label: 'Realizado'});
  }
}
