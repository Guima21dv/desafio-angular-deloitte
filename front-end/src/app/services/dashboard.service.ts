import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  protected API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAmbientes(): Observable<any>{
    return this.http.get(this.API_URL + 'dashboard/ambientes');
  }

  public getConsumo(): Observable<any>{
    return this.http.get(this.API_URL + 'dashboard/consumo');
  }

  public getDoughnut(): Observable<any>{
    return this.http.get(this.API_URL + 'dashboard/doughnut');
  }

  public getPlanejamento(): Observable<any>{
    return this.http.get(this.API_URL + 'dashboard/planejamento');
  }

  public getFaturamento(): Observable<any>{
    return this.http.get(this.API_URL + 'dashboard/faturamento');
  }

  public getTempoMedioDeIntegracao(): Observable<any>{
    return this.http.get(this.API_URL + 'dashboard/tempoMedioDeIntegracao');
  }

  public getNumeroDeAplicacoes(): Observable<any>{
    return this.http.get(this.API_URL + 'dashboard/numeroDeAplicacoes');
  }
}
