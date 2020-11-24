export function Hombre(estatura: number,peso: number) {
    let IMC = peso/(estatura*estatura);
    IMC.toFixed(2);
    let rest;
    if (IMC<20) {
        rest = `peso bajo` 
    } else {if (IMC >=20 && IMC <=27) {
            rest = `peso normal` 
        } else {if (IMC >=27 && IMC <=30) {
            rest = `sobrepeso` 
            } else {if (IMC >=30 && IMC <=35) {
                    rest = `obesidad grado 1` 
                } else {if (IMC >=35 && IMC <=40) {
                        rest = `obesidad grado 2` 
                    } else {rest = `obesidad grado 3 (obesidad mórbida)` 
                    }
                }
            }
        }
    }
    return "IMC: "+IMC.toFixed(2)+", "+rest
    }

export function pesoMin(edad: number,estatura: number){
    let rest: number
    if (edad==16) {
        rest = (estatura*estatura)*19;
    } else {if (edad==17||edad==18) {
            rest = (estatura*estatura)*20
        } else {if (edad>=19 && edad<=24) {
                rest = (estatura*estatura)*21
            } else {if (edad>=25 && edad<=34) {
                    rest = (estatura*estatura)*22
                } else {if (edad>=35 && edad<=54) {
                        rest = (estatura*estatura)*23
                    } else {if (edad>=55 && edad<=64) {
                            rest = (estatura*estatura)*24
                        } else {if (edad>=65 && edad<=90) {
                                rest = (estatura*estatura)*25
                            }
                        }
                    }
                }
            }
        }
    }

    return rest.toFixed(2)+" kg";
}

export function pesoMax(edad: number,estatura: number){
    let rest: number
    if (edad==16) {
        rest = (estatura*estatura)*24
    } else {
        if (edad==17||edad==18) {
            rest = (estatura*estatura)*25
        } else {
            if (edad>=19 && edad<=24) {
                rest = (estatura*estatura)*26
            } else {
                if (edad>=25 && edad<=34) {
                    rest = (estatura*estatura)*27
                } else {
                    if (edad>=35 && edad<=54) {
                        rest = (estatura*estatura)*38
                    } else {
                        if (edad>=55 && edad<=64) {
                            rest = (estatura*estatura)*29
                        } else {if (edad>=65 && edad<=90) {
                                rest = (estatura*estatura)*30
                            }
                        }
                    }
                }
            }
        }
    }
    return rest.toFixed(2)+" kg";

}