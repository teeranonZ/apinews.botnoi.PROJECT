import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern(/^\d{1,3}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    }, { validator: this.passwordMatchValidator.bind(this) });
  }

  onSubmit(): void {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      console.log('Form is valid');
      this.router.navigate(['/info']);
    } else {
      console.log('Form is invalid');
      if (this.registerForm.dirty || this.registerForm.touched) {
        console.log('Incomplete or incorrect form data error');
      }
    }
  }

  onCancel(): void {
    this.registerForm.reset();
    this.registerForm.updateValueAndValidity();
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    } else if (password.length < 8 || confirmPassword.length < 8) {
      return { passwordLength: true };
    } else {
      return null;
    }
  }
}