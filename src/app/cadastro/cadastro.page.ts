import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  public userForm: FormGroup;
  public check_bool = false;
  public c = 0;

  constructor(
    private form: FormBuilder,
    private router: Router,
    private storage: Storage
  ) {
    this.userForm = this.form.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(10)]),
      ],
      cpf: ['', Validators.required],
      cep: ['', Validators.required],
      check: [false, Validators.requiredTrue],
    });
  }

  ngOnInit() {
    this.storage.create();
  }

  return() {
    this.router.navigateByUrl('/home');
  }

  termo() {
    this.router.navigateByUrl('/termo');
  }

  check_function(event: any) {
    console.log('Checkbox event:', event);
    const isChecked = event.detail?.checked || event.target?.checked || false;
    this.userForm.get('check')?.setValue(isChecked);
    console.log('Checkbox value set to:', isChecked);
    console.log('Form valid:', this.userForm.valid);
  }

  submitForm() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.storage.set('User', this.userForm.value);
      this.router.navigateByUrl('/menu');
    }
  }
}
