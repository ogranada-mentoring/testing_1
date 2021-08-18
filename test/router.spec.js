const chai = require('chai'); // Libreria para verificar si algo se cumple
const sinon = require('sinon');
const myrouter = require('../src/router1'); // ARRANGE 


// describe es para hacer suites/paquetes de pruebas
describe('Router', () => {
  // it es para hacer una prueba especifica
  it('El router debe crearse u ser agregado al server', () => {
    // ARRANGE
    const server1 = {
      use: sinon.mock()
    };
    const resultado = myrouter.makeRouter(server1); // ACT
    chai.expect(server1.use.calledOnce).to.be.true; // ASSERT
  });

  it('Prueba asincrona', (done) => {
    myrouter.cargarInfoDeBD().then((res) => {
      chai.expect(res).to.be.equal('OK');
      done();
    })
  })
});

