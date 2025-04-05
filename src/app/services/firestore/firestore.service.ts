import { Injectable } from '@angular/core';
import {collection, collectionData, doc, docData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {IGame} from '../../models/game';
import {IDeveloper} from '../../models/developer';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getGames(): Observable<IGame[]> {
    const gameRef = collection(this.firestore, 'games');
    return collectionData(gameRef, { idField: 'id' }) as Observable<IGame[]>;
  }

  getGameById(gameId: string): Observable<any> {
    const gameDocRef = doc(this.firestore, `games/${gameId}`);
    return docData(gameDocRef, { idField: 'id' });
  }

  getDevelopers(): Observable<IDeveloper[]> {
    const developerRef = collection(this.firestore, 'developers');
    return collectionData(developerRef, { idField: 'id' }) as Observable<IDeveloper[]>;
  }
}
