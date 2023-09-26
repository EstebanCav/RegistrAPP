import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-docente',
  templateUrl: './login-docente.page.html',
  styleUrls: ['./login-docente.page.scss'],
})
export class LoginDocentePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  menudocente() {
    this.router.navigate(['/menu-docente'])
  }

  restablecerpass() {
    this.router.navigate(['/restablecer-pass'])
  }
}
