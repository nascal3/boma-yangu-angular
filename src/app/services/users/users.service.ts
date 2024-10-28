import { Injectable } from '@angular/core';
import {searchCredentials, userSearchResponse} from './users.interface';
import {BehaviorSubject, catchError, Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  private userFilterResultsSubject =  new BehaviorSubject<any>(null);
  userFilterResults$ = this.userFilterResultsSubject.asObservable();

  searchUser(userName: string) {
    const payload  = {
      payload: { usrUsername: userName },
      token: localStorage.getItem('authToken')
    }
    this.http.post<any>(`${environment.apiUrl}/search`, payload)
      .pipe(
        catchError((error) => {
          console.error('Failed to fetch posts', error)
          return of([])
        })
      )
      .subscribe((data: userSearchResponse  ) => {
        this.userFilterResultsSubject.next(data)
      });

  }
}
