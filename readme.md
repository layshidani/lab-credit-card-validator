# Validador de cartão de crédito

[![Build Status](https://travis-ci.org/layshidani/lab-credit-card-validator.svg?branch=master)](https://travis-ci.org/layshidani/lab-credit-card-validator)
[![Coverage Status](https://coveralls.io/repos/github/layshidani/lab-credit-card-validator/badge.svg?branch=master)](https://coveralls.io/github/layshidani/lab-credit-card-validator?branch=master)

[![link-npm](https://img.shields.io/badge/link-npm-red.svg)](https://www.npmjs.com/package/lab-credit-card-validator)
![GitHub package.json version](https://img.shields.io/github/package-json/v/layshidani/lab-credit-card-validator.svg)

![JavaScript](https://img.shields.io/badge/-JavaScript-yellow.svg)
![mocha](https://img.shields.io/badge/-mocha-yellowgreen.svg)
![nyc](https://img.shields.io/badge/-nyc-brightgreen.svg)
![chai](https://img.shields.io/badge/-chai-orange.svg)

Esta biblioteca se destina a validar números de cartões de crédito;

## Como instalar:

```zsh
$  npm install lab-credit-card-validator
```

## Como utilizar:
* Formato de entrada da função: string.
* Não insira pontos, traços ou vírgulas.


Exemplo:

```node
const card = require('lab-credit-card-validator');

console.log(card('5374661040114189'));
// return true
```

## Roadmap oficial do projeto

### versão 2.0.0
* entrada para texto ou números

### versão 1.0.0 (released)
* validação de número de cartão de crédito
* entrada para texto (string)
