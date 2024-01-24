export interface Expense {
    id?: string; // Optional for new entries
    date: Date;
    category: string;
    amount: number;
    description: string;
  }