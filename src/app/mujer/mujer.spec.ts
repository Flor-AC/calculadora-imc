import {mujer, edadmujer} from './mujer';

describe('mujer issue test', () => {

  it ('Recibe edad 19 para eso ideal', () => {
    let result = '';
    result = edadmujer(19);
    expect(result).toBe('Peso ideal 19 - 24 Kg/m²');
  });

  it ('Recibe edad 26 para eso ideal', () => {
    let result = '';
    result = edadmujer(26);
    expect(result).toBe('Peso ideal 20 - 25 kg/m²');
  });

  it ('Recibe edad 26 para eso ideal', () => {
    let result = '';
    result = edadmujer(41);
    expect(result).toBe('Peso ideal 21 - 26 kg/m²');
  });

  it ('Recibe edad 52 para eso ideal', () => {
    let result = '';
    result = edadmujer(52);
    expect(result).toBe('Peso ideal 22 - 27 kg/m²');
  });

  it ('Recibe edad 56 para eso ideal', () => {
    let result = '';
    result = edadmujer(56);
    expect(result).toBe('Peso ideal 23 - 28 kg/m²');
  });

  it ('Recibe edad 80 para eso ideal', () => {
    let result = '';
    result = edadmujer(80);
    expect(result).toBe('Peso ideal 25 - 30 kg/m²');
  });



  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 41, 1.60);
    expect(result).toBe('Bajo Peso');
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 51.600, 1.61);
    expect(result).toBe('Normal');
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 77.7, 1.72);
    expect(result).toBe('Sobre Peso');
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 88, 1.70);
    expect(result).toBe('Grado de Obesidad I');
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 112.5, 1.70);
    expect(result).toBe('Grado de Obesidad II');
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 115.5, 1.68);
    expect(result).toBe('Grado de Obesidad III');
  });
});
