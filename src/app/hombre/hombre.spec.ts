import { Hombre, pesoMax, pesoMin } from './hombre';


describe('Hombre uni tests', () => {

    it('Recibo estatura de 1.80, peso de 80 Devuelve IMC de 24.69, peso normal' , () => {
        let result = '';
        result = Hombre(1.80, 80);
        expect(result).toBe('IMC: 24.69, peso normal');

    });

    it('Recibo la estatura de 1.80 y edad 28 tiene un Rango de peso 71.28 kg - 87.48 kg' , () => {
        let result = '';
        result = 'Rango de peso ' + pesoMin(28, 1.80) + ' - ' + pesoMax(28, 1.80);
        expect(result).toBe('Rango de peso 71.28 kg - 87.48 kg');
    });

    it('Recibo estatura de 1.50, peso de 45 Devuelve IMC de 20.00, peso normal' , () => {
        let result = '';
        result = Hombre(1.50, 45);
        expect(result).toBe('IMC: 20.00, peso normal');
    });

    it('Recibo la estatura de 1.50 y edad 48 tiene un Rango de peso 51.75 kg - 85.50 kg' , () => {
        let result = '';
        result = 'Rango de peso ' + pesoMin(48, 1.50) + ' - ' + pesoMax(48, 1.50);
        expect(result).toBe('Rango de peso 51.75 kg - 85.50 kg');
    });

    it('Recibo estatura de 1.90, peso de 80 Devuelve IMC de 22.16, peso normal' , () => {
        let result = '';
        result = Hombre(1.90, 80);
        expect(result).toBe('IMC: 22.16, peso normal');
    });

    it('Recibo la estatura de 1.90 y edad 25 tiene un Rango de peso 79.42 kg - 97.47 kg' , () => {
        let result = '';
        result = 'Rango de peso ' + pesoMin(25, 1.90) + ' - ' + pesoMax(25, 1.90);
        expect(result).toBe('Rango de peso 79.42 kg - 97.47 kg');
    });
});
