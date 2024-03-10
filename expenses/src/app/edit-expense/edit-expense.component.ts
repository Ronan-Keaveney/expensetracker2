import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExpenseServiceService } from '../expense-service.service';
import { CategoryServiceService } from '../category-service.service';
import { Expense } from '../models/expense.model';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-edit-expense-modal',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  @Input() categories: Category[] = [];
  editExpenseForm: FormGroup;
  currentExpenseId: string;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseServiceService,
    private categoryService: CategoryServiceService
  ) {
    this.editExpenseForm = this.fb.group({
      date: ['', Validators.required],
      category: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern(/^\d+\.?\d{0,2}$/)]],
      description: ['']
    });
  }

  ngOnInit(): void {
    // this.editExpenseForm = this.fb.group({
    //   date: ['', Validators.required],
    //   category: ['', Validators.required],
    //   amount: ['', [Validators.required, Validators.min(0)]],
    //   description: ['']
    // });
  }

  openModal(expense: Expense): void {
    this.currentExpenseId = expense._id;
    this.editExpenseForm.patchValue(expense);
    $('#editExpenseModal').modal('show'); // Assuming you're using Bootstrap for modal
  }

  submitEdit(): void {
    if (this.editExpenseForm.valid) {
      this.expenseService.updateExpense(this.currentExpenseId, this.editExpenseForm.value).subscribe({
        next: (updatedExpense) => {
          // Handle success
          $('#editExpenseModal').modal('hide');
          // Emit an event or use a service to inform the parent component to refresh the expense list
        },
        error: (error) => {
          // Handle error
          console.error('Error updating expense:', error);
        }
      });
    }
  }
}
