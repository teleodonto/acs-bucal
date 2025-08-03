import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage{
  private qu : any;
  private questoesOriginais: any; // Armazenar questões originais para determinar temática
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
       this.questoesOriginais = [...this.qu]; // Salvar cópia das questões originais
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
      // Salvar que a temática foi concluída
      this.salvarProgressoTematica();
    }
    this.resposta = "stay";
}

salvarProgressoTematica() {
  // Determinar qual temática foi concluída baseado nas questões originais
  const tematicaIndex = this.determinarIndiceTematica();
  if (tematicaIndex !== -1) {
    const chaveProgresso = `tematica_${tematicaIndex}_concluida`;
    localStorage.setItem(chaveProgresso, 'true');
    console.log(`Temática ${tematicaIndex} concluída e salva no localStorage`);
  }
}

determinarIndiceTematica(): number {
  // Usar as questões originais para determinar a temática
  const questoesOriginais = this.questoesOriginais || [];
  
  if (questoesOriginais && questoesOriginais.length > 0) {
    const primeiraQuestao = questoesOriginais[0];
    if (primeiraQuestao && primeiraQuestao.question) {
      const questaoTexto = primeiraQuestao.question[0].toLowerCase();
      
      // Mapear questões para índices de temáticas conforme o menu
      // b_t_1() -> Tematica_1 -> índice 0: Agente Comunitário em Saúde: Aspectos Históricos e legais
      if (questaoTexto.includes('agente comunitário') || questaoTexto.includes('profissional agente') || questaoTexto.includes('criação da profissão') || questaoTexto.includes('acs desenvolve')) {
        return 0;
      }
      // b_t_2() -> Tematica_2 -> índice 1: Redes de Atenção à saúde (RAS)
      else if (questaoTexto.includes('atenção primaria') || questaoTexto.includes('ras') || questaoTexto.includes('redes de atenção') || questaoTexto.includes('princípios da ras') || questaoTexto.includes('upa')) {
        return 1;
      }
      // b_t_3() -> Tematica_3 -> índice 2: Promoção da Saúde e Cuidado no Âmbito da Atenção Básica
      else if (questaoTexto.includes('promoção') || questaoTexto.includes('atenção básica') || questaoTexto.includes('cuidado no âmbito')) {
        return 2;
      }
      // b_t_4() -> Tematica_4 -> índice 3: Atuação do ACS no Âmbito da linha de Cuidado em Atenção Psicossocial
      else if (questaoTexto.includes('psicossocial') || questaoTexto.includes('mental') || questaoTexto.includes('atenção psicossocial')) {
        return 3;
      }
      // b_t_5() -> Tematica_5 -> índice 4: Atuação do ACS no Âmbito da linha de Cuidado Urgência e Emergência
      else if (questaoTexto.includes('urgência') || questaoTexto.includes('emergência') || questaoTexto.includes('urgência e emergência')) {
        return 4;
      }
      // b_t_6() -> Tematica_6 -> índice 5: Atuação do ACS no Âmbito da linha de Cuidado em Doenças Crônicas
      else if (questaoTexto.includes('crônica') || questaoTexto.includes('diabetes') || questaoTexto.includes('hipertensão') || questaoTexto.includes('doenças crônicas')) {
        return 5;
      }
      // b_t_7() -> Tematica_7 -> índice 6: Atuação do ACS no Âmbito da linha de Cuidado em Saúde Materna
      else if (questaoTexto.includes('materna') || questaoTexto.includes('gestante') || questaoTexto.includes('pré-natal') || questaoTexto.includes('saúde materna')) {
        return 6;
      }
    }
  }
  
  // Se não conseguir determinar, retornar -1 para não salvar progresso incorreto
  console.log('Não foi possível determinar a temática correta');
  return -1;
}

obterTextoResposta(letra: string): string {
  // Encontrar a opção correspondente à letra da resposta
  if (this.current_q && this.current_q.options) {
    const opcoes = ['A', 'B', 'C', 'D', 'E', 'F'];
    const indice = opcoes.indexOf(letra.toUpperCase());
    
    if (indice !== -1 && indice < this.current_q.options.length) {
      return `${letra}) ${this.current_q.options[indice].description}`;
    }
  }
  
  // Se não encontrar, retornar apenas a letra
  return letra;
}

}

