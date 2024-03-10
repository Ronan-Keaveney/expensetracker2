export interface Expense {
    _id: string; // Optional for new entries
    date: Date;
    category: string;
    amount: number;
    description: string;
  }