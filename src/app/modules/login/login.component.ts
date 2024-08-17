import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from './login.service';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../utilities/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserType } from '../constants/user-type';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.loginService
        .login(loginData.password, loginData.username)
        .subscribe((userType: string) => {
          this.authService.userType = userType.toLocaleLowerCase();
          this.authService.username = loginData.username;
          localStorage.setItem(
            'userData',
            JSON.stringify({
              userType: userType.toLocaleLowerCase(),
              username: loginData.username,
            })
          );
          const url =
            userType.toLocaleLowerCase() === UserType.Player
              ? '/players/' + loginData.username
              : '/players';
          this.router.navigate([url]);
        });
    }
  }
}
