import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public registerForm: FormGroup;
  public formHasError: boolean = false;

  constructor(private router: Router) {}

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
    if (this.registerForm.valid) this.router.navigate(['home']);
    else this.formHasError = true;
    console.log('Form ', this.registerForm);
  }
}
