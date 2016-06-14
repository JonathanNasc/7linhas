
## Setup

1. Instale a versão 2.4 do [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/);
1. Instale o [Node.js](https://nodejs.org) v5;
1. Na raiz do projeto execute:
```
npm install
```
Obs.: é importante fixar as versões para mater compatibilidade com o OpenShift.

## Rodando localmente

1. Inicie o MongoDb em um terminal com o comando:
```
mongod
```
1. Inicie o server com o comando abaixo e acesse http://localhost:8080
```
npm start
```

## Regras

1. Seguir o padrão [standard](https://github.com/feross/standard) de identação (é recomendavel instalar os plugins do standard na IDE utilizada).
1. Desenvolver no idioma ingles (exceto esse arquivo e os textos que aparecerão na interface).
1. Obedecer a estrutura de arquivos, no caso de funcionalidades de API criar arquivos js com os sufixos routes e manager.
1. É necessário commitar pacotes Bower. Ao incluir novos pacotes, isolar commit.
