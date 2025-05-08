import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage{

  public quiz: any = [];
  public t: any = [];

  constructor(private httpClient: HttpClient, private router: Router, private nav: NavController, private act: ActivatedRoute){
  }

ngOnInit(){
    this.httpClient.get("assets/Modelagem.json").subscribe(
      assets => {
      this.quiz = assets;
    },
    erro => console.log("Ocorreu um erro.")

    );
  }

b_t_1(){
  this.t = this.quiz.Tematica_1;
  this.router.navigate(['/questions'],
        { queryParams: { profile: JSON.stringify(this.t) }});
}

b_t_2(){
  this.t = this.quiz.Tematica_2;
  this.router.navigate(['/questions'],
        { queryParams: { profile: JSON.stringify(this.t) }});

}

b_t_3(){
  this.t = this.quiz.Tematica_3;
  this.router.navigate(['/questions'],
        { queryParams: { profile: JSON.stringify(this.t) }});

}

b_t_4(){
  this.t = this.quiz.Tematica_4;
  this.router.navigate(['/questions'],
        { queryParams: { profile: JSON.stringify(this.t) }});

}

b_t_5(){
  this.t = this.quiz.Tematica_5;
  this.router.navigate(['/questions'],
        { queryParams: { profile: JSON.stringify(this.t) }});

}

b_t_6(){
  this.t = this.quiz.Tematica_6;
  this.router.navigate(['/questions'],
        { queryParams: { profile: JSON.stringify(this.t) }});

}

b_t_7(){
  this.t = this.quiz.Tematica_7;
  this.router.navigate(['/questions'],
        { queryParams: { profile: JSON.stringify(this.t) }});

}

}
