import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  menualumno() {
    this.router.navigate([('/menu-alumno')])
  }

  restablecerpass() {
    this.router.navigate(['/restablecer-pass'])
  }
}
