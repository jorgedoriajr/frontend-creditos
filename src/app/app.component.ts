import { Component } from '@angular/core';
import { SearchComponent } from "./components/search/search.component";
import { ResultsComponent } from "./components/results/results.component";
import { CreditData } from '../app/interface/credit-data.interface'; // <-- Importe a interface

@Component({
  selector: 'app-root',
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend-creditos';
  results: CreditData[] = [];

  onSearchCompleted(result: CreditData[]) {
    this.results = result; // Atualiza o array de resultados
  }

}