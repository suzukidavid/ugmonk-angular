import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public registerForm: FormGroup;
  public formHasError: boolean = false;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.makeform();
  }

  private checkPassword(control: FormControl): any {
    if (
      control &&
      control.root &&
      control.root.get('password') &&
      control.root.get('password').value !== control.value
    ) {
      return {
        mismatch: true,
      };
    }

    return null;
  }

  private makeform(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        this.checkPassword,
      ]),
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.auth.signup({
        email: this.registerForm.controls.email.value,
        name: this.registerForm.controls.name.value,
        password: this.registerForm.controls.password.value,
      }).subscribe(data => {
        if(data) {
          console.log('Data from register : ',data);
          this.router.navigate(['home']);
        }
      });
    }
    else 
      this.formHasError = true;
    console.log('Form ', this.registerForm);
  }
}
