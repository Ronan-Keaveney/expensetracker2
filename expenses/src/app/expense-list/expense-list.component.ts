import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../expense-service.service';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseServiceService) { }

  ngOnInit(): void {
    this.fetchExpenses();
  }

  fetchExpenses(): void {
    this.expenseService.getExpenses().subscribe(
      (data) => {
        this.expenses = data;
      },
      (error) => {
        console.error('Error fetching expenses', error);
      }
    );
  }

  // You can add methods for pagination, filtering, etc., here
}