export function  edadhombre(edad){

  if (edad >= 16 && edad <= 24){
    return 'Peso ideal 19 - 24 Kg/m²';
  } else if (edad >= 25 && edad <= 34){
    return 'Peso ideal 20 - 25 kg/m²';
  } else if (edad >= 35 && edad <= 44){
    return 'Peso ideal 21 - 26 kg/m²';
  } else if (edad >= 45 && edad <= 54){
    return 'Peso ideal 22 - 27 kg/m²';
  } else if (edad >= 55 && edad <= 64){
    return 'Peso ideal 23 - 28 kg/m²';
  } else if (edad >= 65 && edad <= 90){
    return 'Peso ideal 25 - 30 kg/m²';
  }
}

export function  hombre(peso, estatura){
  let imc = 0;
  imc = peso / (estatura * estatura);

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
