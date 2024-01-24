import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { DeleteExpenseComponent } from './delete-expense/delete-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { BudgetSettingComponent } from './budget-setting/budget-setting.component';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseSummaryComponent } from './expense-summary/expense-summary.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    DeleteExpenseComponent,
    EditExpenseComponent,
    BudgetSettingComponent,
    CategoryManagementComponent,
    DashboardComponent,
    ExpenseListComponent,
    ExpenseSummaryComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent,
    SettingsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
