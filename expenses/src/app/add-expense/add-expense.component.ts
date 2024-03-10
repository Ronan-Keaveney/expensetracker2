import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ExpenseServiceService } from '../expense-service.service';
import { CategoryServiceService } from '../category-service.service';
import { Expense } from '../models/expense.model';
import { Category } from '../models/category.model';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {
  expenseForm = this.fb.group({
    date: ['', Validators.required],
    category: ['', Validators.required],
    amount: ['', [Validators.required, Validators.pattern(/^\d+\.?\d{0,2}$/)]], // Pattern for amount with 2 decimal places
    description: ['']
  });

  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseServiceService,
    private categoryService: CategoryServiceService
  ) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categoryService.getCategories().subscribe(
      (categories) => {
        this.categories = categories; // Store fetched categories
      },
      (error) => console.error('Error fetching categories:', error)
    );
  }

  onSubmit() {
    if (this.expenseForm.valid) {
      const formValue = this.expenseForm.value;

      const newExpense: Expense = {
        date: formValue.date ? new Date(formValue.date) : new Date(), // Convert to Date object, default to current date if null/undefined
        category: formValue.category || '', // Default to empty string if null/undefined
        amount: formValue.amount ? parseFloat(formValue.amount) : 0, // Convert string to number, default to 0 if null/undefined or conversion fails
        description: formValue.description || '' // Default to empty string if null/undefined
      };
      this.expenseService.addExpense(newExpense).subscribe(
        response => {
          console.log('Expense added:', response);
          this.expenseForm.reset();
        },
        error => {
          console.error('Error adding expense:', error);
        }
      )
    }
  }
}
