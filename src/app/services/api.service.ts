import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';  // URL do json-server

  constructor(private http: HttpClient) { }

  getByNfse(numeroNfse: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/creditos?numeroNfse=${numeroNfse}`);
  }
  
  getByCredito(numeroCredito: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/creditos?numeroCredito=${numeroCredito}`);
  }
  
}