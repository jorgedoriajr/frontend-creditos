import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api';  // URL da API backend-creditos

  constructor(private http: HttpClient) { }

  getByNfse(numeroNfse: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/creditos/${numeroNfse}`);
  }
  
  getByCredito(numeroCredito: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/creditos/credito/${numeroCredito}`);
  }
  
}