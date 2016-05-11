
## Setup

1. Instale a versão 2.4 do [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-linux/);
2. Instale a versão `0.10.0` do [Node.js](https://nodejs.org);
3. Na raiz do projeto execute o seguinte comando para instalar as dependências e configurar a base:

```
npm install
```

## Rodando o Servidor
1. Inicie o server com o comando a baixo e acesse http://localhost:8080
```
npm start
```

## Executando os Testes

1. Ainda estamos sem testes automatizados. Para rodar um teste manual utilize a classe helloWorld.js e em seguida rode
```
npm run hello-world
```

## Regras para Commit

1. Seguir o padrão [standard](https://github.com/feross/standard) de identação;
2. Executores com sufixo Executor.js devem exportar um valor chamado de action descrevendo
sua ação no padrão caixa-baixa-separado-por-hifen e um método execute com a função a ser executada.
3.  Não criar novas rotas. Para funções de api usar a rota padrão /execute.
