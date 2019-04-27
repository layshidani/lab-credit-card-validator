# Validador de cartão de crédito

![Lib version](https://img.shields.io/badge/lib-v1.0.0-blue.svg) 
![JavaScript](https://img.shields.io/badge/-JavaScript-yellow.svg) 
![mocha](https://img.shields.io/badge/-mocha-yellowgreen.svg)
![nyc](https://img.shields.io/badge/-nyc-brightgreen.svg)
![chai](https://img.shields.io/badge/-chai-orange.svg)

Esta biblioteca se destina a validar números de cartões de crédito;

## Como instalar:

```
$  npm install lab-credit-card-validator
```

## Como utilizar:
* Formato de entrada da função: sting.
* Não insira pontos, traços ou vírgulas.


Exemplo:

```
> const validateNum = require('lab-credit-card-validator');
> console.log(validateNum('5374661040114189'));
> // return true
```

## Roadmap oficial do projeto

### versão 2.0.0
* entrada para texto ou números

### versão 1.0.0 (released)
* validação de número de cartão de crédito
* entrada para texto