import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthResponse, AuthCredentials} from './auth.interface';
import { environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';
  constructor(private http: HttpClient) {}

  login(credentials: AuthCredentials): Observable<AuthResponse> {
    return this.http.post<any>(`${environment.apiUrl}/login`, credentials);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    const token = this.getToken();
    this.http.post<any>(`${environment.apiUrl}/logOut`, token);
    localStorage.removeItem(this.tokenKey);
  }
}
