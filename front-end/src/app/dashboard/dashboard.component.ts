import { DashboardService } from './../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faturamento: number;
  tempoMedioDeIntegracao: any;
  numeroDeAplicacoes: number;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadFaturamento();
    this.loadTempoMedioIntegracao();
    this.loadNumeroDeAplicacoes();
  }

  loadFaturamento(): void{
    this.dashboardService.getFaturamento().subscribe(response => {
      this.faturamento = response;
    });
  }

  loadTempoMedioIntegracao(): void{
    this.dashboardService.getTempoMedioDeIntegracao().subscribe(response => {
      this.tempoMedioDeIntegracao = response;
    });
  }

  loadNumeroDeAplicacoes(): void{
    this.dashboardService.getNumeroDeAplicacoes().subscribe(response => {
      this.numeroDeAplicacoes = response;
    });
  }
}
