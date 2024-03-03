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

  addExpense(expense: Expense): Observable<Expense> {
    const token = this.getToken(); // Retrieve the token from storage

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include the token in the request headers
    });

    return this.http.post<Expense>(this.apiUrl, expense, { headers });
  }

  getExpenses(): Observable<Expense[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
    return this.http.get<Expense[]>(this.apiUrl, { headers });
  }

  deleteExpense(expenseId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    })
    return this.http.delete(`${this.apiUrl}/${expenseId}`, { headers });
  }

  // Method to retrieve the token (adjust based on how you store the token)
  private getToken(): string | null {
    return localStorage.getItem('authToken'); // Replace 'authToken' with your token key
  }
}
