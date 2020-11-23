import {addition} from './mujer';

describe('mujer issue test', () => {

  it('Recibe peso', () => {
    let result = 0;
    result = addition ( 51 );
    expect(result).toBe(51);
  });

  it('Recibe Estatura', () => {
    let result = 0;
    result = addition (161);
    expect(result).toBe(161);
  });
})