import { Component } from '@angular/core';

import {Storage} from '@ionic/storage-angular';

import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { NgxMaskModule } from 'ngx-mask';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, NgxMaskModule],
  declarations: [HomePage]
})

export class HomePage {
  public loginform: FormGroup;
  private cpf_value: any[] = [];
  public cpf = '';
  // Aceite do termo (LGPD): começa desmarcado e libera o botão "Acessar".
  public aceite = false;

  constructor(private storage: Storage, public form: FormBuilder, private router: Router) {
    this.loginform = this.form.group(
      {
      cpf_login: ['', Validators.required]
      });
  }
NgOnInit(){
}

// ngModel não atualiza o ion-checkbox neste projeto (mesmo caso do cadastro).
marcarAceite(event: any){
  this.aceite = !!(event?.detail?.checked);
}

abrirTermo(event: Event){
  event.preventDefault();
  event.stopPropagation();
  this.router.navigateByUrl('/termo');
}

entrar(){
  this.router.navigateByUrl('/menu');

}

cadastrar(){
  this.router.navigateByUrl('/cadastro');
}

validator_(){
this.storage.get('User').then((result) => {
  this.cpf_value.push(result);
});
console.log(this.cpf_value);

}

}
