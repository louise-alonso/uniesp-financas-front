💸 UNIESP Finanças App
Este é o repositório do front-end para um aplicativo de finanças pessoais desenvolvido em React Native como parte de um projeto acadêmico. O aplicativo permite que os usuários controlem suas receitas e despesas de forma simples e intuitiva, com funcionalidades de cadastro, login e visualização de transações.

📋 Índice
✨ Funcionalidades Principais

🎨 Protótipo

🛠️ Tecnologias Utilizadas

🚀 Como Executar o Projeto

Pré-requisitos

Passo a Passo

📂 Estrutura de Pastas

✨ Funcionalidades Principais
Autenticação de Usuário: Telas de Login e Cadastro para acesso seguro.

Dashboard Intuitivo: Visualização rápida do saldo atual, total de entradas e saídas.

Histórico de Transações: Lista com as últimas movimentações financeiras.

Registro de Movimentações: Formulário para adicionar novas receitas e despesas.

Filtragem por Data: Um calendário para consultar o histórico financeiro.

Gerenciamento de Perfil: Área do usuário com opção de logout.

🎨 Protótipo
O design e o fluxo de telas do projeto foram planejados na plataforma Figma. Você pode visualizar o protótipo completo no link abaixo:

Acessar Protótipo no Figma

🛠️ Tecnologias Utilizadas
Este projeto foi construído com as seguintes tecnologias e bibliotecas:

React Native: Framework para desenvolvimento de aplicativos móveis multiplataforma.

Expo: Plataforma e conjunto de ferramentas para facilitar o desenvolvimento com React Native.

Styled Components: Para estilização dos componentes de forma organizada e reutilizável.

React Navigation: Para gerenciamento de rotas e navegação entre as telas.

Axios: Para realizar requisições HTTP e consumir a API do backend.

🚀 Como Executar o Projeto
Siga os passos abaixo para configurar e rodar o ambiente de desenvolvimento localmente.

Pré-requisitos
Node.js (versão LTS recomendada)

NPM ou Yarn

Expo Go App no seu smartphone (Android/iOS) ou um emulador configurado.

Git para clonar o repositório.

Passo a Passo
Backend Primeiro!
O front-end precisa se comunicar com o backend para funcionar. Clone, instale as dependências e execute o projeto do backend primeiro, seguindo as instruções do repositório dele:

🔗 Repositório do Backend: https://gitlab.com/DevRafaelSa/uniesp-financas-backend

Clone este Repositório (Front-end)

Bash

git clone https://github.com/louise-alonso/uniesp-financas-front.git
Acesse a Pasta do Projeto

Bash

cd uniesp-financas-front
Instale as Dependências

Bash

npm install
ou, se preferir usar o Yarn:

Bash

yarn install
Configure a Conexão com a API
A comunicação entre o app e o servidor depende do endereço de IP da sua máquina local. Localize no código (geralmente em um arquivo como src/services/api.js) a variável que define a baseURL do Axios e substitua o IP pelo endereço da máquina onde o backend está rodando.

Dica: Para descobrir seu IP local no Windows, use ipconfig no terminal. No macOS ou Linux, use ifconfig ou ip addr.

Inicie o Projeto

Bash

npx expo start
Abra o Aplicativo
Após o comando acima, um QR Code será exibido no terminal. Abra o aplicativo Expo Go no seu celular e escaneie o QR Code para carregar o app.

📂 Estrutura de Pastas
O projeto está organizado da seguinte forma para facilitar a manutenção e escalabilidade:

src/
├── components/ # Componentes reutilizáveis (Botões, Inputs, Cards)
├── pages/      # As telas principais da aplicação (Login, Home, Cadastrar)
├── routes/     # Configurações de navegação e fluxo de telas (AuthRoutes, AppRoutes)
└── services/   # Configuração do Axios e lógica de comunicação com a API
