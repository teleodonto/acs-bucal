# ACS Bucal

ACS Bucal é um aplicativo desenvolvido para a **capacitação de Agentes Comunitários de Saúde (ACS)** nas temáticas relacionadas à Odontologia. Ele tem como objetivo aprimorar os conhecimentos dos ACS para que possam oferecer melhores informações e orientações à população que atendem.

## 📱 Funcionalidades

- Cadastro de usuário com nome completo, localização e CPF.
- Login com CPF após o primeiro acesso.
- Acesso a conteúdos educacionais nas áreas:
  - Aspectos históricos e legais do ACS
  - Redes de Atenção à Saúde (RAS)
  - Promoção da Saúde e Atenção Básica
  - Atenção Psicossocial
  - Urgência e Emergência
  - Doenças Crônicas
  - Saúde Materna, Neonatal e Lactente
- Testes de conhecimento com perguntas e respostas em formato de gamificação.
- Feedback imediato sobre respostas corretas ou incorretas, com fontes.
- Tela de resultados para acompanhamento do desempenho do usuário.

## 🔐 Termos de Uso e Privacidade

O ACS Bucal segue a **Lei Geral de Proteção de Dados (LGPD)** e garante a privacidade das informações inseridas pelos usuários. Confira os [Termos de Uso](Termos_de_Uso_ACSbucal.pdf) para mais detalhes.

## 🚀 Instalação no Servidor Debian

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/acs-bucal.git
   ```

2. Acesse a pasta:
   ```bash
   cd acs-bucal
   ```

3. Instale as dependências (ajuste conforme a tecnologia do projeto):
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pip install -r requirements.txt
   ```

4. Configure as variáveis de ambiente conforme necessário.

5. Inicie a aplicação:
   ```bash
   npm start
   # ou
   python app.py
   # ou conforme o comando do projeto
   ```

6. Para produção, configure um servidor web (Nginx, Apache) e um serviço systemd para manter o app rodando.

## 💻 Tecnologias utilizadas

- Web/mobile app (detalhar ao confirmar as tecnologias no código)
- Backend (Node.js, Python, ou outra linguagem – confirmar no projeto)
- Banco de dados (MySQL, PostgreSQL, MongoDB – confirmar no projeto)

## 📂 Estrutura do repositório

- `src/` → código-fonte do aplicativo
- `public/` → arquivos estáticos
- `Termos_de_Uso_ACSbucal.pdf` → documento com os termos de uso
- `README.md` → este arquivo

## 📧 Contato

Desenvolvido pela Universidade do Estado do Rio de Janeiro (UERJ)  
Dúvidas e suporte: [teleodontofouerj@gmail.com](mailto:teleodontofouerj@gmail.com)

---

### ⚠️ Observação importante
Antes de subir ao GitHub, revise e remova qualquer dado sensível, como credenciais ou informações pessoais, do código e das configurações.
