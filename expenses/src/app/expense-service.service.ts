import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from './models/expense.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {
  private apiUrl = 'http://localhost:5000/api/expenses'; // Replace with your actual API URL

  constructor(private http: HttpClient, private authService : AuthService) {}

  // private getHttpOptions() {
  //   const token = this.authService.getToken();
  //   return {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     })
  //   };
  // }
  
  // addExpense(expense: Expense): Observable<Expense> {
  //   return this.http.post<Expense>(this.apiUrl, expense, this.getHttpOptions());
  // }
  // Add other methods as needed (get, update, delete, etc.)

  addExpense(expense: Expense): Observable<Expense> {
    const token = this.getToken(); // Retrieve the token from storage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include the token in the request headers
    });

    return this.http.post<Expense>(this.apiUrl, expense, { headers });
  }

  // Method to retrieve the token (adjust based on how you store the token)
  private getToken(): string | null {
    return localStorage.getItem('authToken'); // Replace 'authToken' with your token key
  }
}
