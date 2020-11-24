import {mujer} from './mujer';
import {edadmujer} from './mujer';

describe('mujer issue test', () => {

  it ( 'Recibe edad', () => {
    let result = 0;
    result = edadmujer(19);
    expect(result).toBe(19);
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 51.600, 1.61);
    expect(result).toBe('19.9');
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 77.7, 1.72);
    expect(result).toBe('26.3');
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 88, 1.70);
    expect(result).toBe('30.4');
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 112.5, 1.80);
    expect(result).toBe('34.7');
  });

  it('Recibe peso y estatura', () => {
    let result: number | string = 0;
    result = mujer ( 115.5, 1.68);
    expect(result).toBe('40.9');
  });

});
