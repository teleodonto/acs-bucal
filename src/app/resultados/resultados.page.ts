import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {
  
  public tematicas: any[] = [];
  public tematicasConcluidas: number = 0;
  public progressoGeral: number = 0;
  public totalTematicas: number = 7;

  constructor() {
  }

  ngOnInit(){
    this.carregarProgresso();
  }

  carregarProgresso() {
    // Lista das 7 temáticas
    const nomesTematicas = [
      'Agente Comunitário em Saúde: Aspectos Históricos e legais',
      'Redes de Atenção à saúde (RAS)',
      'Promoção da Saúde e Cuidado no Âmbito da Atenção Básica',
      'Atuação do ACS no Âmbito da linha de Cuidado em Atenção Psicossocial',
      'Atuação do ACS no Âmbito da linha de Cuidado Urgência e Emergência',
      'Atuação do ACS no Âmbito da linha de Cuidado em Doenças Crônicas',
      'Atuação do ACS no Âmbito da linha de Cuidado em Saúde Materna'
    ];

    this.tematicas = [];
    this.tematicasConcluidas = 0;

    // Verificar progresso de cada temática no localStorage
    nomesTematicas.forEach((nome, index) => {
      const chaveProgresso = `tematica_${index}_concluida`;
      const concluida = localStorage.getItem(chaveProgresso) === 'true';
      
      this.tematicas.push({
        nome: nome,
        concluida: concluida,
        progresso: concluida ? 100 : 0
      });

      if (concluida) {
        this.tematicasConcluidas++;
      }
    });

    // Calcular progresso geral
    this.progressoGeral = Math.round((this.tematicasConcluidas / this.totalTematicas) * 100);
  }

}
