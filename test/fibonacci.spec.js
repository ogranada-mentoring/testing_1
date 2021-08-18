const chai = require('chai');
const fib = require('../src/fibonacci'); // arrange

// describe es para hacer suites/paquetes de pruebas
describe('Pruebas de la serie de fibonacci', () => {
  // 0, 1, 1, 2, 3, 5, 8, 13, 21... <-
  it('El 1er termino de la serie de fibonacci debe ser 0', () => {
    const value = fib(1); // ACT
    chai.expect(value).to.be.equals(0);
  })
  it('El 2do termino de la serie de fibonacci debe ser 1', () => {
    const value = fib(2); // ACT
    chai.expect(value).to.be.equals(1);
  })
  it('El 6to termino de la serie de fibonacci debe ser 5', () => {
    const value = fib(6); // ACT
    chai.expect(value).to.be.equals(5);
  })
  it('El 3er termino de la serie de fibonacci debe ser 1', () => {
    const value = fib(3); // ACT
    chai.expect(value).to.be.equals(1);
  });
  it('El 6to termino de la serie de fibonacci debe ser 5', () => {
    const value = fib(6); // ACT
    chai.expect(value).to.be.equals(5);
  })
});
