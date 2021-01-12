import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Persona} from '../models/persona';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  apiUrl = 'https://api-calculadoraimc.herokuapp.com';

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  create(person: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl + '/persona', person, this.httpOptions).pipe(retry(1),
      catchError(this.handleError));
  }

  getAll() {
    return this.http.get(this.apiUrl + '/persona', this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  get(id): Observable<Persona> {
    return this.http.get<Persona>(this.apiUrl + '/persona/' + id, this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage;

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log('Ha ocurrido un error');

    return throwError(errorMessage);
  }
}
