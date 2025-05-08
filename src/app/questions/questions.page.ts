import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage{
  private qu : any;
  private q_index: number;
  private current_q: any;
  private pontos : any =  [];
  private resposta: string;
  private end: boolean;

constructor(private act : ActivatedRoute, private router: Router){
}


ngOnInit(){
  this.act.queryParams.subscribe(
    params => {
       this.qu = JSON.parse(params['profile']);
    }
  );
  this.q_index = Math.floor(Math.random() * this.qu.length);
  this.current_q = this.qu[this.q_index];
  this.resposta = "stay";
  this.end = false;
}
results(answer){
  if (answer.isright){
    this.resposta = "true";
    this.end = false;
    this.pontos.push(0);
    console.log("Correto e tem ",this.pontos.length," pontos.");

  }
  else{
    this.resposta = "false";
  }
}

continuar(){
  this.qu.splice(this.q_index, 1)[0];
  if (this.qu.length > 0){
    this.end = false;
    this.q_index = this.q_index = Math.floor(Math.random() * this.qu.length);
    this.current_q = this.qu[this.q_index];}
    if (this.qu.length > 0){
      this.q_index = Math.floor(Math.random() * this.qu.length);
      this.current_q = this.qu[this.q_index];}

    else{
      this.end = true;
    }
    this.resposta = "stay";
}

}

