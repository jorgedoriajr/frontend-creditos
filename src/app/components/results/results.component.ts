import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CreditData } from '../../interface/credit-data.interface'; // <-- Importe a interface

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule // Importar módulo da tabela
  ],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  // Data source para a tabela
  dataSource = new MatTableDataSource<CreditData>();

  // Colunas exibidas na tabela
  displayedColumns: string[] = [
    'id',
    'numeroCredito',
    'numeroNfse',
    'dataConstituicao',
    'valorIssqn',
    'tipoCredito',
    'simplesNacional',
    'aliquota',
    'valorFaturado',
    'valorDeducao',
    'baseCalculo'
  ];

  // Input para receber dados do componente pai
  @Input() set searchResults(results: CreditData[]) {
    this.dataSource.data = results;
  }
}