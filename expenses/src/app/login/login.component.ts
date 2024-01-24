import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as {email: string; password: string}).subscribe(
        response => {
          console.log('Login Successful', response);
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.error('Login failed', error);

          this.loginForm.reset();
        }
      )
    }
  }
}

