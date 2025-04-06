import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameGalleryComponent } from '../../components/game-gallery/game-gallery.component';
import { Game } from '../../models/game';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import {GameSearchService, SearchFilters} from '../../services/game-search/game-search.service';

@Component({
  selector: 'app-advanced-search-page',
  standalone: true,
  imports: [
    GameGalleryComponent,
    FormsModule
  ],
  templateUrl: './advanced-search-page.component.html',
  styleUrl: './advanced-search-page.component.css'
})
export class AdvancedSearchPageComponent implements OnInit, OnDestroy {
  games: Game[] = [];
  filters: SearchFilters = {};
  private gamesSubscription!: Subscription;
  private filtersSubscription!: Subscription;

  constructor(private gameSearchService: GameSearchService) {}

  ngOnInit(): void {
    this.gamesSubscription = this.gameSearchService.getGames().subscribe(games => {
      console.log('Games received in AdvancedSearchPageComponent:', games);
      this.games = games;
    });

    this.filtersSubscription = this.gameSearchService.getFilters().subscribe(filters => {
      console.log('Filters received in AdvancedSearchPageComponent:', filters);
      this.filters = filters;
    });

    const storedFilters = localStorage.getItem('searchFilters');
    if (storedFilters) {
      const parsedFilters = JSON.parse(storedFilters);
      if (parsedFilters.pegi) {
        parsedFilters.pegi = Number(parsedFilters.pegi);
      }
      this.gameSearchService.applyFilters(parsedFilters);
    } else {
      this.gameSearchService.loadAllGames();
    }
  }

  ngOnDestroy(): void {
    this.gamesSubscription?.unsubscribe();
    this.filtersSubscription?.unsubscribe();
  }

  onSearchFormSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const pegiValue = formData.get('pegi') as string;
    const newFilters: SearchFilters = {
      searchTerm: formData.get('name') as string || undefined,
      system: formData.get('system') as string || undefined,
      platform: formData.get('platform') as string || undefined,
      genre: formData.get('genre') as string || undefined,
      pegi: pegiValue ? Number(pegiValue) : undefined,
      inStock: formData.get('stock') === 'on' ? true : undefined
    };

    this.gameSearchService.applyFilters(newFilters);
  }

  clearFilters() {
    this.gameSearchService.clearFilters();
    const form = document.getElementById('advanced-search-form') as HTMLFormElement;
    form.reset();
  }
}
