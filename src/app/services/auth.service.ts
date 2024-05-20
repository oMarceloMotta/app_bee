import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('user');
    return !!token;
  }
}
