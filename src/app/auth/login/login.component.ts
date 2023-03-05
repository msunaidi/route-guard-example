import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.username.value, this.password.value);
      this.router.navigate(['/']);
    }
  }

  get username() {
    return this.loginForm.controls['username'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
}
