import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termo',
  templateUrl: './termo.page.html',
  styleUrls: ['./termo.page.scss'],
})
export class TermoPage implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  // Volta para a tela de onde o usuário veio (login ou cadastro);
  // se o termo foi aberto direto pelo link, vai para o login.
  voltar() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigateByUrl('/home');
    }
  }

}
