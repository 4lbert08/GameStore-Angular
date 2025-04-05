import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypedLoaderService {

  private subjectsMap = new Map<string, BehaviorSubject<any>>();

  constructor() {}

  load<T>(model: Type<T>, source$: Observable<T | T[]>): void {
    const key = this.getKey(model);

    let subject = this.subjectsMap.get(key);
    if (!subject) {
      subject = new BehaviorSubject<T | T[] | null>(null);
      this.subjectsMap.set(key, subject);
    }

    source$.pipe(
      catchError(err => {
        console.error(`Error al cargar datos para [${key}]`, err);
        return of(null);
      })
    ).subscribe(data => {
      if (data === null) {
        subject!.next(null);
        return;
      } else if (Array.isArray(data)) {
        const instances = data.map(item =>
          Object.assign(Object.create(model.prototype), item)
        );
        subject!.next(instances);
      } else {
        const instance = Object.assign(Object.create(model.prototype), data);
        subject!.next(instance);
      }
    });
  }

  getData$<T>(model: Type<T>): Observable<T | T[] | null> {
    const key = this.getKey(model);

    let subject = this.subjectsMap.get(key);
    if (!subject) {
      subject = new BehaviorSubject<T | T[] | null>(null);
      this.subjectsMap.set(key, subject);
    }

    return subject.asObservable();
  }

  private getKey(model: Type<any>): string {
    return model.name;
  }
}
