import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('username') && localStorage.getItem('password')) {
      return true; // อนุญาตให้เข้าถึงหน้า
    } else {
      this.router.navigate(['/']); // ถ้าไม่มีการล็อกอิน ให้ redirect ไปที่หน้า Log
      return false; // ไม่อนุญาตให้เข้าถึงหน้า
    }
  }
  
}
