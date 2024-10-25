import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthResponse, AuthCredentials} from './auth.interface';

@Injectable({
  providedIn: 'root', // Provides this service globally
})
export class AuthService {
  private tokenKey = 'authToken';
  private apiUrl = 'https://kcb-boma-yangu-backend-kcb-boma-yangu.apps.dev.aro.kcbgroup.com/api/users/login';

  constructor(private http: HttpClient) {}

  login(credentials: AuthCredentials): Observable<AuthResponse> {
    return this.http.post<any>(this.apiUrl, credentials);
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
    localStorage.removeItem(this.tokenKey);
  }
}
