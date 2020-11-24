export function  mujer(peso, estatura){
    let estatura2 = 0;
    let imc = 0;
    estatura2 = estatura * estatura;
    imc = peso / estatura2;
    return imc.toFixed(1);

    if (imc <= 18.4){
      return 'Bajo Peso';
    } else if (imc >= 18.5 && imc <= 24.9 ){
      return 'Normal';
    } else if (imc >= 25 && imc <= 29.9){
      return 'Sobre Peso';
    } else if (imc >= 30 && imc <= 34.9){
      return 'Grado de Obesidad I';
    } else if (imc >= 35 && imc <= 39.9){
      return 'Grado de Obesidad II';
    } else if (imc >= 40) {
      return 'Grado de Obesidad III';
    }
}
