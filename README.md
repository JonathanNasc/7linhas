
## Setup

1. Instale a versão 2.4 do [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/);
1. Instale o [Node.js](https://nodejs.org) v5;
1. Na raiz do projeto execute:
```
npm install
```
Obs.: é importante fixar as versões para mater compatibilidade com o OpenShift.

## Rodando localmente

1. Inicie o MongoDb em um terminal
```
mongod
```
1. Inicie o server em outro terminal
```
npm start
```
1. Para popular a base acesse http://localhost:8080/api/wake-up
1. A aplicação estará disponível em http://localhost:8080/

## Regras

1. Seguir o padrão [standard](https://github.com/feross/standard) de identação (é recomendavel instalar os plugins do standard na IDE utilizada).
1. Desenvolver no idioma ingles (exceto esse arquivo e os textos que aparecerão na interface).
1. Obedecer a estrutura de arquivos, no caso de funcionalidades de API criar arquivos js com os sufixos routes e manager.
