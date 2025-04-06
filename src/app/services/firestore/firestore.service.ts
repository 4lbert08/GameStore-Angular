import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  query,
  where,
  QueryConstraint
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Game } from '../../models/game';
import { Developer } from '../../models/developer';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  getGames(filters: { [key: string]: any } = {}): Observable<Game[]> {
    const gameRef = collection(this.firestore, 'games');
    const queryConstraints: QueryConstraint[] = this.buildQueryConstraints(filters);
    const q = query(gameRef, ...queryConstraints);
    return collectionData(q, { idField: 'id' }) as Observable<Game[]>;
  }

  private buildQueryConstraints(filters: { [key: string]: any }): QueryConstraint[] {
    const constraints: QueryConstraint[] = [];

    if (filters['platform']) {
      constraints.push(where('platform', '==', filters['platform']));
    }
    if (filters['system']) {
      constraints.push(where('system', '==', filters['system']));
    }
    if (filters['genre']) {
      constraints.push(where('genres', 'array-contains', filters['genre']));
    }
    if (filters['pegi']) {
      constraints.push(where('pegi', '==', filters['pegi']));
    }
    if (filters['inStock'] !== undefined) {
      constraints.push(where('stock', '==', filters['inStock']));
    }
    if (filters['minPrice'] !== undefined) {
      constraints.push(where('amount', '>=', filters['minPrice']));
    }
    if (filters['maxPrice'] !== undefined) {
      constraints.push(where('amount', '<=', filters['maxPrice']));
    }
    if (filters['searchTerm']) {
      constraints.push(where('name', '>=', filters['searchTerm']));
      constraints.push(where('name', '<=', filters['searchTerm'] + '\uf8ff'));
    }

    return constraints;
  }

  getGameById(gameId: string): Observable<Game> {
    const gameDocRef = doc(this.firestore, `games/${gameId}`);
    return docData(gameDocRef, { idField: 'id' }) as Observable<Game>;
  }

  getDevelopers(): Observable<Developer[]> {
    const developerRef = collection(this.firestore, 'developers');
    return collectionData(developerRef, { idField: 'id' }) as Observable<Developer[]>;
  }
}
