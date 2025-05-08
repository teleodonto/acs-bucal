import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { NgxMaskModule } from 'ngx-mask';

import { Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, NgxMaskModule],
  declarations: [CadastroPage]
})

export class CadastroPage{
    public userForm: FormGroup;
    public check_bool = false;
    public c = 0;

constructor(private form: FormBuilder, private router: Router, private storage : Storage){
  this.userForm = this.form.group(
    {
    nome: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    cpf: ['', Validators.required],
    cep: ['', Validators.required],
    check: [false, Validators.requiredTrue]
    });
  }

ngOnInit(){
  this.storage.create();
}

return(){
  this.router.navigateByUrl('/home');

}

termo(){
  this.router.navigateByUrl('/termo');
}

check_function(valor){
  this.userForm.get('check').setValue(valor.detail.checked)
}

submitForm(){
  console.log(this.userForm.value);
  this.storage.set('User', this.userForm.value);
}

}

