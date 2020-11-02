import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { AmbientesChartComponent } from './ambientes-chart/ambientes-chart.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { PlanejamentoChartComponent } from './planejamento-chart/planejamento-chart.component';
import { ConsumoChartComponent } from './consumo-chart/consumo-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AmbientesChartComponent,
    PlanejamentoChartComponent,
    ConsumoChartComponent,
    DoughnutChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
