import { AmbienteData } from './../../shared/interfaces/AmbienteData';
import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-ambientes-chart',
  templateUrl: './ambientes-chart.component.html',
  styleUrls: ['./ambientes-chart.component.css']
})
export class AmbientesChartComponent implements OnInit {

  dadosCarregados = false;
  public chartType: ChartType = 'bar';

  public chartData: ChartDataSets[] = [];
  public chartLabels: Label[] = [];

  public ambientesChartLegend = false;
  public ambientesChartBarColor: Color[] = [
    { backgroundColor: '#5B9BD5' }
  ]

  public ambientesChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    title: {
      text: 'Ambientes',
      display: true,
      position: 'top',
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{}]
    }
  };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAmbientes().subscribe(response => {
      this.loadChartDataSetAndLabels(response);
      this.dadosCarregados = true;
    });
  }

  loadChartDataSetAndLabels(data: AmbienteData[]): void {
    const labels = data.map(value => value.label);
    const quantidades = data.map(value => value.quantidade);
    this.chartLabels = labels;
    this.chartData.push({ data: quantidades, barPercentage: 0.5 });
  }
}
