# Arquitetura

Esta é uma aparte de front da aplicação, foi utilizado o framework Vue.js como base do js, foram utilizados o pre-processador sass para manutenção do estilo do app, para o state global foi utilizado o vuex em conjunto com o localForage caso a API fique indisponível.
A cada requisição nova'os dados são armazenados "localmente" no browser, sendo assim caso a Api fique foram, novos dados não exibidos(botao avançar) mas caso queria ver os dados já requisitados é só clicar em anterior.

## Instruções para execução

fazer o clone do projeto [code-chalenge](https://github.com/tvmota/code-chalenge) 

```bash
cd /code-chalenge
npm i
npm run serve
```

Acessar [http://localhost:8080](http:localhost:8080) :D