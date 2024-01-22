import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { Routes } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { BudgetSettingComponent } from './budget-setting/budget-setting.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteExpenseComponent } from './delete-expense/delete-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseSummaryComponent } from './expense-summary/expense-summary.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'add-expense', component: AddExpenseComponent },
    { path: 'budget-setting', component: BudgetSettingComponent },
    { path: 'category-management', component: CategoryManagementComponent },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'delete-expense', component: DeleteExpenseComponent},
    { path: 'edit-expense', component: EditExpenseComponent},
    { path: 'expense-list', component: ExpenseListComponent},
    { path: 'expense-summary', component: ExpenseSummaryComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'settings', component: SettingsComponent},
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' } // default route
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
