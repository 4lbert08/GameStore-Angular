import { Injectable, Type } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypedLoaderService {

  private subjectsMap = new Map<string, BehaviorSubject<any>>();

  constructor() {}

  load<T>(model: Type<T>, source$: Observable<T[]>): void {
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
      if (Array.isArray(data)) {
        const instances = data.map((item: any) => Object.assign(Object.create(model.prototype), item));
        subject!.next(instances);
      } else if (data) {
        subject!.next(Object.assign(Object.create(model.prototype), data));
      } else {
        subject!.next(null);
      }
    });
  }

  getData$<T>(model: Type<T>): Observable<T[]> {
    const key = this.getKey(model);

    let subject = this.subjectsMap.get(key);

    if (!subject) {
      subject = new BehaviorSubject<T | null>(null);
      this.subjectsMap.set(key, subject);
    }
    return subject.asObservable();
  }

  private getKey(model: Type<any>): string {
    return model.name;
  }
}
