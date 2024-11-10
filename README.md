# API_REST_BIBLIOTECA
## Descrição

Este é um projeto construído com JavaScript, Node.js, MongoDB, Mongoose e Nodemon. O objetivo deste projeto é fornecer uma aplicação backend com banco de dados NoSQL usando MongoDB, gerenciamento de dados com Mongoose e execução eficiente durante o desenvolvimento com Nodemon.

## Tecnologias Utilizadas
JavaScript: Linguagem de programação para o backend.

Node.js: Ambiente de execução para JavaScript no lado do servidor.

MongoDB: Banco de dados NoSQL utilizado para armazenar os dados da aplicação.

Mongoose: Biblioteca que fornece uma solução de modelagem para dados MongoDB no Node.js.

Nodemon: Utilitário de desenvolvimento que monitora mudanças nos arquivos e reinicia o servidor automaticamente.

## Funcionalidades
Conexão ao MongoDB para armazenamento de dados.
Modelagem de dados usando Mongoose.
API simples para realizar operações CRUD (Create, Read, Update, Delete).
Reconhecimento automático de mudanças no código com Nodemon, facilitando o desenvolvimento contínuo.

## Instalação

### Pré-requisitos
Antes de começar, certifique-se de que você tenha os seguintes softwares instalados:

Node.js (versão 12 ou superior).
MongoDB (se estiver rodando localmente) ou uma conta no MongoDB Atlas se usar a versão em nuvem.
### Passos para rodar o projeto
Clone o repositório

Primeiro, clone este repositório para sua máquina local:

``` bash
git clone https://github.com/davidtav/Api-Rest-Node-MongoDB.git
```

### Instale as dependências

Navegue até o diretório do projeto e instale as dependências do projeto com o NPM.

Se estiver utilizando o MongoDB localmente, inicie o serviço do MongoDB na sua máquina. Caso contrário, configure a string de conexão para o MongoDB Atlas ou outra instância remota no arquivo de configuração (geralmente no config.js ou server.js).


## Estrutura do Projeto
A estrutura básica do projeto é a seguinte:

```bash
/API_REST_BIBLIOTECA
│
├── /config             # Configurações, como a string de conexão do MongoDB
├── /models             # Modelos Mongoose
├── /src/app.js         # app com as operações da API
├── .gitignore          # Arquivo para ignorar arquivos não desejados no Git  
├── package-lock.json   # serve para garantir que as dependências do projeto sejam instaladas de forma consistente em todas as máquinas e ambientes.
├── package.json        # Gerenciamento de dependências e scripts
├── README.md           #  fornece informações essenciais sobre o projeto. Ele é exibido na página principal do repositório no GitHub 
└── server.js           # Arquivo principal para inicializar o servidor
```

## Scripts do NPM
 Para iniciar o servidor em modo de desenvolvimento com o Nodemon (auto-reload).

```bash
npm run dev
```

## Licença

Este projeto está licenciado sob a MIT License.

[MIT](https://choosealicense.com/licenses/mit/)
