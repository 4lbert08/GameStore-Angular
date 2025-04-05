import { Injectable } from '@angular/core';
import {collection, collectionData, doc, docData, Firestore, query, where} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Game} from '../../models/game';
import {Developer} from '../../models/developer';
import {Review} from '../../models/review';
import {User} from '../../models/user';

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
    return docData(gameDocRef, { idField: 'id' }) as Observable<Game>;
  }

  getDevelopers(): Observable<Developer[]> {
    const developerRef = collection(this.firestore, 'developers');
    return collectionData(developerRef, { idField: 'id' }) as Observable<Developer[]>;
  }

  getUserById(userId: string): Observable<User> {
    const userDocRef = doc(this.firestore, `users/${userId}`);
    return docData(userDocRef, { idField: 'id' }) as Observable<User>;
  }

  getReviewsFromGame(gameId: string): Observable<Review[]> {
    return collectionData(
      query(collection(this.firestore, 'reviews'), where('gameId', '==', gameId)),
      { idField: 'id' }
    ) as Observable<Review[]>;
  }

  getReviewsFromUser(userId: string): Observable<Review[]> {
    return collectionData(
      query(collection(this.firestore, 'reviews'), where('userId', '==', userId)),
      { idField: 'id' }
    ) as Observable<Review[]>;
  }

}
