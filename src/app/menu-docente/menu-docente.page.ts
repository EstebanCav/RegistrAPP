import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-docente',
  templateUrl: './menu-docente.page.html',
  styleUrls: ['./menu-docente.page.scss'],
})
export class MenuDocentePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  qr() {
    this.router.navigate(['/qr'])
  }

  perfildocente() {
    this.router.navigate(['/perfil-docente'])
  }

}
