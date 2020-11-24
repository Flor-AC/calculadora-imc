import { Component, OnInit } from '@angular/core';
import {falseIfMissing} from 'protractor/built/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  generoF: boolean;
  generoM: boolean;
  peso: any;
  estatura: any;
  estatura2: any;
  edad: any;
  imc: any;
  pesoIdeal: any;

  constructor() {
    this.generoF = false;
    this.generoM = false;
  }

  imcresultado(){
    this.estatura2 = this.estatura * this.estatura;
    this.imc = this.peso / this.estatura2;
    this.imc = this.formateaValor(this.imc);

    if (this.edad >= 16 && this.edad <= 24){
        this.pesoIdeal = '19 - 24 Kg/m²';
      } else if (this.edad >= 25 && this.edad <= 34){
      this.pesoIdeal =  '20 - 25 kg/m²';
      } else if (this.edad >= 35 && this.edad <= 44){
        this.pesoIdeal =  '21 - 26 kg/m²';
      } else if (this.edad >= 45 && this.edad <= 54){
        this.pesoIdeal =  '22 - 27 kg/m²';
      } else if (this.edad >= 55 && this.edad <= 64){
        this.pesoIdeal =  '23 - 28 kg/m²';
      } else if (this.edad >= 65 && this.edad <= 90){
        this.pesoIdeal =  '25 - 30 kg/m²';
      }
  }

  formateaValor(valor) {
    // si no es un número devuelve el valor, o lo convierte a número con 2 decimales
    return isNaN(valor) ? valor : parseFloat(valor).toFixed(1);
  }

  ngOnInit(): void {
  }

}
