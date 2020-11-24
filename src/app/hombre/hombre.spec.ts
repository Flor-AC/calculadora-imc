import { Hombre, pesoMax, pesoMin } from "./Hombre"


describe('Hombre uni tests', () => {
    
    it('Should IMC estatura: 1.80, peso: 80 = IMC: 24.69, peso normal' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = Hombre(1.80,80);

        //Assert
        expect(result).toBe('IMC: 24.69, peso normal');

    })

    it('Should peso ideal de la estatura: 1.80 y edad 28 = Rango de peso 71.28 kg - 87.48 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Rango de peso '+pesoMin(28,1.80)+' - '+pesoMax(28,1.80);

        //Assert
        expect(result).toBe('Rango de peso 71.28 kg - 87.48 kg');

    })

    it('Should IMC estatura: 1.50, peso: 45 = IMC: 20.00, peso normal' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = Hombre(1.50,45);

        //Assert
        expect(result).toBe('IMC: 20.00, peso normal');

    })

    it('Should peso ideal de la estatura: 1.50 y edad 48 = Rango de peso 51.75 kg - 85.50 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Rango de peso '+pesoMin(48,1.50)+' - '+pesoMax(48,1.50);

        //Assert
        expect(result).toBe('Rango de peso 51.75 kg - 85.50 kg');

    })

    it('Should IMC estatura: 1.90, peso: 80 = IMC: 22.16, peso normal' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = Hombre(1.90,80);

        //Assert
        expect(result).toBe('IMC: 22.16, peso normal');

    })
   
    it('Should peso ideal de la estatura: 1.90 y edad 25 = Rango de peso 79.42 kg - 97.47 kg' , () => {
        //Pattern AAA (Arrage - Act - Assert)

        //Arrange
        let result = '';

        //Act
        result = 'Rango de peso '+pesoMin(25,1.90)+' - '+pesoMax(25,1.90);

        //Assert
        expect(result).toBe('Rango de peso 79.42 kg - 97.47 kg');

    })

})