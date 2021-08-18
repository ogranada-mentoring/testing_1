const chai = require('chai');
const fetch = require('node-fetch');

//api.openweathermap.org

// describe es para hacer suites/paquetes de pruebas
describe('Pruebas de consumo de API', () => {
  
  it('Respuesta Exitosa - 200', async () => {
    const {status} = await fetch('http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires&appid=217381ead8580dfce5b954b94162893f');
    chai.expect(status).to.be.equal(200);
    
  })

  it('Clima correcto', async () => {
    const respuesta = await fetch('http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires&appid=217381ead8580dfce5b954b94162893f');
    
    const data = await respuesta.json();

    chai.expect(data.weather.length ).to.be.greaterThan(0);    
    chai.expect(data.name).to.be.equal('Buenos Aires');    
  })

  it('Ciudad inexistente', async () => {
    const {status} = await fetch('http://api.openweathermap.org/data/2.5/weather?q=wakanda&appid=217381ead8580dfce5b954b94162893f');
    
    chai.expect(status).to.be.equal(404);
  });
})
