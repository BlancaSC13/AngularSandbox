import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

const API_URL = 'https://localhost:7053/api/';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}
  addStudent(student: any): Observable<any> {
    console.log(student);
    return this.http
      .post<any>(
        API_URL + 'PostStudent/',
        JSON.stringify(student),
        HTTP_OPTIONS
      )
      .pipe(
        tap((student) => console.log('Student added!')),
        catchError(this.handleError<any>('Error message')) //todo: customizar
      );
  }
  handleError<T>(
    arg0: string
  ): (
    err: any,
    caught: Observable<any>
  ) => import('rxjs').ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
}
