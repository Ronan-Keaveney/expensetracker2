import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private baseUrl = 'http://localhost:5000/api/users'; // Adjust the URL based on your backend configuration

  constructor(private http: HttpClient) { }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  register(user: any) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  // login(credentials: { email: string; password: string }) {
  //   this.isLoggedIn = true;
  //   return this.http.post(`${this.baseUrl}/login`, credentials);
  // }

  login(credentials: { email: string; password: string }) {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
          this.isLoggedIn = true;
        }
      })
    );
  }

  logout() {
    // Clear any stored authentication data
    localStorage.removeItem('authToken'); // Adjust as per your token storage key
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

}
