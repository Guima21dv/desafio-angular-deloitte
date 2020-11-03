import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ConsumoData } from 'src/app/shared/interfaces/ConsumoData';

@Component({
  selector: 'app-consumo-chart',
  templateUrl: './consumo-chart.component.html',
  styleUrls: ['./consumo-chart.component.css']
})
export class ConsumoChartComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  public dadosCarregados = false;
  public chartLabels: Label[] = [];
  public chartData: ChartDataSets[] = [];
  public dataSetsLabels = ['Portador', 'Token', 'Bins', 'Pricing', 'Facilitador', 'Hist. Trans.'];
  public consumoChartType: ChartType = 'horizontalBar';

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
    this.dashboardService.getConsumo().subscribe(response => {
      this.loadChartDataSetAndLabels(response);
      this.dadosCarregados = true;
    })
  }

  loadChartDataSetAndLabels(data: ConsumoData[]): void {
    const labels = data.map(value => value.label);
    const portadorQtd = data.map(value => value.portador);
    const tokenQtd = data.map(value => value.token);
    const binsQtd = data.map(value => value.bins);
    const pricingQtd = data.map(value => value.pricing);
    const facilitadorQtd = data.map(value => value.facilitador);
    const histTransQtd = data.map(value => value.histTrans);
    const datas = [
      portadorQtd,
      tokenQtd,
      binsQtd,
      pricingQtd,
      facilitadorQtd,
      histTransQtd
    ]
    this.chartLabels.push(...labels);
    const result = this.dataSetsLabels.map((value, index) => {
      return {data: datas[index], label: value, stack: 'a'};
    });
    this.chartData.push(...result);
  }

}
