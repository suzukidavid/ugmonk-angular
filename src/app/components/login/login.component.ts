import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public formHasError: boolean = false;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.makeform();
  }

  private makeform(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login({
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      });
    } else this.formHasError = true;
    console.log('Form ', this.loginForm);
  }
}
