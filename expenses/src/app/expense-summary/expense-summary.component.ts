import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../expense-service.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-expense-summary',
  templateUrl: './expense-summary.component.html',
  styleUrls: ['./expense-summary.component.css']
})
export class ExpenseSummaryComponent implements OnInit {
  // Pie chart properties
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // additional options
  };
  public pieChartLabels: string[] = []; // for categories
  public pieChartData: ChartData<'pie', number[]> = { datasets: [] };
  public pieChartType: ChartType = 'pie';

  constructor(private expenseService: ExpenseServiceService) {}

  ngOnInit() {
    this.fetchExpenses();
  }

  fetchExpenses(): void {
    this.expenseService.getExpenses().subscribe({
      next: (expenses) => {
        this.processExpenses(expenses);
      },
      error: (err) => console.error(err)
    });
  }

  processExpenses(expenses: any[]): void {
    // Aggregate expenses by category or another metric
    const expensesByCategory = this.aggregateExpenses(expenses);
    this.pieChartLabels = [...expensesByCategory.keys()];
    this.pieChartData = {
      datasets: [{
        data: [...expensesByCategory.values()]
      }]
    };
  }

  aggregateExpenses(expenses: any[]): Map<string, number> {
    const expensesMap = new Map<string, number>();
    expenses.forEach(expense => {
      if (expensesMap.has(expense.category)) {
        expensesMap.set(expense.category, expensesMap.get(expense.category)! + expense.amount);
      } else {
        expensesMap.set(expense.category, expense.amount);
      }
    });
    return expensesMap;
  }
}
