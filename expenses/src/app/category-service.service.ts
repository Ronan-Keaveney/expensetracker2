import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private apiUrl = 'http://localhost:5000/api/categories';

  constructor(private http: HttpClient, private authService: AuthService) {}

  addCategory(category: { name: string }): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}` // Replace with your method to get the token
      })
    };
    return this.http.post(this.apiUrl, category, httpOptions);
  }
  

  getCategories(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    return this.http.get<any[]>(this.apiUrl, httpOptions);
  }
}
