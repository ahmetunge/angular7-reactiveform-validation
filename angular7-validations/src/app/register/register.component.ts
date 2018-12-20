import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  registerForm: FormGroup;
  firstname = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  lastname = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]);
  confirmPassword = new FormControl('', Validators.required);
  ngOnInit() {
    this.createFormValidations();
  }

  createFormValidations() {
    this.registerForm = this.formBuilder.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    },
      { validator: MustMatch('password', 'confirmPassword') }
    );
  }

  passwordMatchValidator(group: FormGroup) {
    return group.get('password').value === group.get('confirmPassword').value ? null : { misMatch: true };
  }

  onSubmit() {

    if (this.registerForm.invalid) {
      return;
    }

    this.router.navigate(['home']);
  }

}
