import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  loginForm: FormGroup;
  allowedUsername: string = 'teeranon.p@ku.th'; // The allowed username
  allowedPassword: string = '1234'; // The allowed password

  constructor(private fb: FormBuilder, private router: Router) {                                   
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], // Ensure it's a valid email
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;

      if (username === this.allowedUsername && password === this.allowedPassword) {
        // ดำเนินการเข้าสู่ระบบ
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        this.router.navigate(['/home']); // ทำการ redirect ไปหน้า Home
      } else {
        alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
    } else {
      alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
    }
  }
}
