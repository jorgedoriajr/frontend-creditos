import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CreditData } from '../../interface/credit-data.interface'; // <-- Importe a interface
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-search',
  standalone: true, // <-- Adicionar esta linha
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  numeroNfse: string = '';
  numeroCredito: string = '';
  errorMessage: string = '';
  loading: any;

  @Output() searchCompleted = new EventEmitter<CreditData>(); // <-- Tipagem forte

  constructor(private apiService: ApiService) {} // ResultsComponent removido

  onSearch() {
  if (this.numeroNfse) {
      this.apiService.getByNfse(this.numeroNfse).subscribe({
        next: (results: CreditData[]) => {
          const item = Array.isArray(results) ? results[0] : results; //Se a API pode mudar (às vezes retorna array, às vezes objeto):
          if (item) {
            this.searchCompleted.emit(item);
          } else {
            alert('Nenhum resultado encontrado!');
          }
        },
        error: (err) => {
          alert('Erro na busca: ' + err.message);
        }
      });
    } else if (this.numeroCredito) {
      this.apiService.getByCredito(this.numeroCredito).subscribe({
        next: (results: CreditData[]) => {
          const item = Array.isArray(results) ? results[0] : results; //Se a API pode mudar (às vezes retorna array, às vezes objeto):
          if (item) {
            this.searchCompleted.emit(item);
          } else {
            alert('Nenhum resultado encontrado!');
          }
        },
        error: (err) => {
          alert('Erro na busca: ' + err.message);
        }
      });
    }
  }
}