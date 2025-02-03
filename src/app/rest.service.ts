import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';

const API_URL = 'https://localhost:7053/api/Student/';
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
  getStudents(): Observable<any> {
    return this.http.get<any>(API_URL + 'GetStudents', HTTP_OPTIONS);
    //TODO: handle errors
  }
  getStudentById(id: any): Observable<any> {
    return this.http.get<any>(API_URL + 'GetStudent/' + id, HTTP_OPTIONS);
  }
  updateStudent(student: any): Observable<any> {
    //TODO: test PutStudent without SP
    return this.http.put<any>(
      API_URL + 'PutStudentSP',
      JSON.stringify(student),
      HTTP_OPTIONS
    );
  }
  addStudent(student: any): Observable<any> {
    console.log(student);

    return this.http.post<any>(
      API_URL + 'PostStudent',
      JSON.stringify(student),
      HTTP_OPTIONS
    );
    //TODO: handle errors
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
