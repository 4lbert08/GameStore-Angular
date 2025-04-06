import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Game} from '../../models/game';
import {FirestoreService} from '../firestore/firestore.service';

export interface SearchFilters {
  searchTerm?: string;
  system?: string;
  platform?: string;
  genre?: string;
  pegi?: number;
  inStock?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GameSearchService {
  private gamesSubject = new BehaviorSubject<Game[]>([]);
  private filtersSubject = new BehaviorSubject<SearchFilters>({});

  constructor(private firestoreService: FirestoreService) {}

  getGames(): Observable<Game[]> {
    return this.gamesSubject.asObservable();
  }

  getFilters(): Observable<SearchFilters> {
    return this.filtersSubject.asObservable();
  }

  loadAllGames() {
    this.firestoreService.getGames().subscribe(games => {
      this.gamesSubject.next(games);
      this.filtersSubject.next({});
    });
  }

  loadGamesBySearchTerm(searchTerm: string) {
    const filters: SearchFilters = { searchTerm };
    this.firestoreService.getGames(filters).subscribe(games => {
      this.gamesSubject.next(games);
      this.filtersSubject.next(filters);
    });
  }

  applyFilters(filters: SearchFilters) {
    const currentFilters = { ...this.filtersSubject.value, ...filters };
    this.filtersSubject.next(currentFilters);
    this.firestoreService.getGames(currentFilters).subscribe(games => {
      this.gamesSubject.next(games);
    });
  }

  clearFilters() {
    this.filtersSubject.next({});
    this.loadAllGames();
  }
}
