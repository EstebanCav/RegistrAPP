import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.page.html',
  styleUrls: ['./menu-alumno.page.scss'],
})
export class MenuAlumnoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  lectorqr() {
    this.router.navigate(['/lector-qr'])

  }
  perfilalumno() {
    this.router.navigate(['/perfil-alumno'])
  }
}
