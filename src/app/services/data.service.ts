import { Storage } from '@ionic/storage-angular';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage : Storage) {

  }

OnInit(){
  this.storage.create();
}
}
