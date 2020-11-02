import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit, ViewChild, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-ambientes-chart',
  templateUrl: './ambientes-chart.component.html',
  styleUrls: ['./ambientes-chart.component.css']
})
export class AmbientesChartComponent implements OnInit {

  dadosCarregados = false;
  constructor(private dashboardService: DashboardService) { }
  public chartType: ChartType = 'bar';
  public ambientesChartLabels: Label[] = ['Sandbox', 'Stage', 'Produção']

  public ambientesChartData: ChartDataSets[] = [
    { data: [15.0, 8.0, 13.0], barPercentage: 0.5 }
  ];

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
  ngOnInit(): void {
  }

}
