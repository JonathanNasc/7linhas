
## Setup

1. Instale a versão `0.10.0` do [Node.js](https://nodejs.org);
1. Na raiz do projeto execute o seguinte comando para instalar as dependências e configurar a base:

```
npm install
```

## Rodando o Servidor
```
npm start
```

## Executando os Testes

```
npm test
```

## Regras para Commit

- Seguir o padrão [standard](https://github.com/feross/standard) de identação;
- Executores com sufixo Executor.js devem exportar um valor chamado de action descrevendo
sua ação no padrão caixa-baixa-separado-por-hifen e um método execute com a função a ser executada.
- Não criar novas rotas. Para funções de api usar a rota padrão /execute.