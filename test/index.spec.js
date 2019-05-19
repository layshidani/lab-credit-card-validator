const { assert } = require('chai');
const cardValidator = require('../index');

describe('Validador de cartão de credito', () => {
  describe('Deve retornar true para cartoes validos:', () => {
    it('Mastercard - Deve retornar true: 5374661040114189', () => {
      assert.equal(cardValidator('5374661040114189'), true);
    });
    it('Visa - Deve retornar true: 4556398657023626', () => {
      assert.equal(cardValidator('4556398657023626'), true);
    });
    it('Elo - Deve retornar true: 6363688326577129', () => {
      assert.equal(cardValidator('6363688326577129'), true);
    });
  });

  describe('Deve retornar false para cartoes invalidos:', () => {
    it('Vazio - Deve retornar false ', () => {
      assert.equal(cardValidator(''), false);
    });
    it('Qtd de digitos inválida - Deve retornar false:  123456', () => {
      assert.equal(cardValidator('123456'), false);
    });
    it('Numeros e letras - Deve retornar false: 1sd2d3456', () => {
      assert.equal(cardValidator('1sd2d3456'), false);
    });
  });
});
