import { Injectable } from '@angular/core';
import {collection, collectionData, doc, docData, Firestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Game} from '../../models/game';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getGames(): Observable<Game[]> {
    const gameRef = collection(this.firestore, 'games');
    return collectionData(gameRef, { idField: 'id' }) as Observable<Game[]>;
  }

  getGameById(gameId: string): Observable<any> {
    const gameDocRef = doc(this.firestore, `games/${gameId}`);
    return docData(gameDocRef, { idField: 'id' });
  }

}
