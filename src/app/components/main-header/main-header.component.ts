import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {GameSearchService} from '../../services/game-search/game-search.service';
import {first} from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  searchQuery: string = '';
  selectedLanguage: string = 'en';

  constructor(
    private router: Router,
    private gameSearchService: GameSearchService
  ) {}

  goToAdvancedSearch() {
    this.gameSearchService.loadAllGames();
    this.gameSearchService.getGames().pipe(first()).subscribe(games => {
      console.log('Juegos cargados antes de navegar (todos):', games);
      this.router.navigate(['advanced-search-page']);
    });
  }

  search() {
    if (this.searchQuery) {
      this.gameSearchService.loadGamesBySearchTerm(this.searchQuery);
      this.gameSearchService.getGames().pipe(first()).subscribe(games => {
        console.log('Juegos cargados antes de navegar (filtrados):', games);
        this.router.navigate(['advanced-search-page']);
      });
    } else {
      this.goToAdvancedSearch();
    }
  }

  onSearchQueryChange() {
    console.log('Término de búsqueda cambiado:', this.searchQuery);
  }

  protected readonly encodeURI = encodeURI;
}
