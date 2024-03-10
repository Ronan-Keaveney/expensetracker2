import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../expense-service.service';
import { Expense } from '../models/expense.model';
import { EditExpenseComponent } from '../edit-expense/edit-expense.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseServiceService, private editExpenseComponent: EditExpenseComponent) { }

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

  deleteExpense(expenseId: string | undefined, index: number): void {
    if (!expenseId) {
      console.error('Expense ID is undefined');
      return;
    }
    this.expenseService.deleteExpense(expenseId).subscribe({
      next: () => {
        this.expenses.splice(index, 1); // Remove the expense from the list
        console.log('Expense deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting expense', error);
      }
    });
  }

  // In your ExpenseListComponent

openEditModal(expense: Expense): void {
  this.editExpenseComponent.openModal(expense);
}


  // You can add methods for pagination, filtering, etc., here
}