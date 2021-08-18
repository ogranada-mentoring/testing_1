/**
 * Las partes de una prueba unitaria son
 * - Arrange: Preparación del entorno de pruebas
 * - Act: Ejecución de la función/método que estoy probando
 * - Assert: Verificación de un resultado.
 */


const assert = require('assert'); // Libreria para verificar si algo se cumple
const matematica = require('../src/matematica'); // ARRANGE

// describe es para hacer suites/paquetes de pruebas
describe('Matematica', () => {
  // it es para hacer una prueba especifica
  it('La suma de dos números deberia ser correcta', () => {
    const resultado = matematica.suma(2, 2); // ACT
    assert.strictEqual(resultado, 4); // ASSERT
  });
  it('El módulo de un número deberia ser el correcto', () => {
    const res = matematica.modulo(5, 3); // ACT
    assert.strictEqual(res, 2); // ASSERT
  });
});





/**
 * 
 
describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
 */