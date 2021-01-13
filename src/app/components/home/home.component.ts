import { Component, OnInit } from '@angular/core';
import {falseIfMissing} from 'protractor/built/util';
import {UsuarioService} from '../../services/usuario.service';
import {Usuario} from '../../models/usuario';
import {environment} from '../../../environments/environment';
import {Persona} from '../../models/persona';
import {PersonaService} from '../../services/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  password: string;

  public isMenuCollapsed = true;

  btnNavbar: boolean;
  btnHistorial: boolean;

  usuario: Usuario;
  persona: Persona;
  personas: any;

  generoF: boolean;
  generoM: boolean;
  peso: any;
  estatura: any;
  estatura2: any;
  edad: any;
  imc: any;
  imcIdeal: any;
  pesoIdeal: any;
  nombre: any;

  constructor(private usarioService: UsuarioService, private personaService: PersonaService) {
    this.personas = [];
    this.generoF = false;
    this.generoM = false;
  }

  historial(){
    this.obtenerHistorial();
  }

  login(){
    this.usarioService.login(this.username, this.password).subscribe(res => {
      if (res) {
        if (res.message.toString() === 'El usuario no existe') {
          console.log('El usuario no existe ');
        } else if (res.message.toString() === 'Password incorrecta') {
          console.log('Contraseña incorrecta');
        } else {
          console.log('Se accedio correctamente');
          this.btnHistorial = true;
          this.btnNavbar = false;
          localStorage.setItem('token', res.message);
        }
      }
    });
  }

  registrarse(){
    this.usarioService.register(this.usuario).subscribe(
      (result: any) => {
        console.log('Se registro correctamente');
        $('#abrirRegistro').modal('hide');
      },
      error => {
        console.log(error);
      }
    );
  }

  imcresultado(){
    this.estatura2 = this.estatura * this.estatura;
    this.imc = this.peso / this.estatura2;
    // this.imc = this.formateaValor;

    if (this.edad >= 16 && this.edad <= 24){
      this.imcIdeal = '19 - 24 Kg/m²';
    } else if (this.edad >= 25 && this.edad <= 34){
      this.imcIdeal =  '20 - 25 kg/m²';
    } else if (this.edad >= 35 && this.edad <= 44){
      this.imcIdeal =  '21 - 26 kg/m²';
    } else if (this.edad >= 45 && this.edad <= 54){
      this.imcIdeal =  '22 - 27 kg/m²';
    } else if (this.edad >= 55 && this.edad <= 64){
      this.imcIdeal =  '23 - 28 kg/m²';
    } else if (this.edad >= 65 && this.edad <= 90){
      this.imcIdeal =  '25 - 30 kg/m²';
    }

    if (this.estatura >= 1.44 && this.estatura <= 1.45){
      this.pesoIdeal = '38.4 - 51.6 Kg';
    } else if (this.estatura >= 1.46 && this.estatura <= 1.47) {
      this.pesoIdeal = '39.4 - 53.0 Kg';
    } else if (this.estatura >= 1.48 && this.estatura <= 1.49) {
      this.pesoIdeal = '40.5 - 54.5 Kg';
    } else if (this.estatura >= 1.50 && this.estatura <= 1.51) {
      this.pesoIdeal = '41.6 - 56.0 Kg';
    } else if (this.estatura >= 1.52 && this.estatura <= 1.53) {
      this.pesoIdeal = '42.7 - 57.5 Kg';
    } else if (this.estatura >= 1.54 && this.estatura <= 1.55) {
      this.pesoIdeal = '43.9 - 59.1 Kg';
    } else if (this.estatura >= 1.56 && this.estatura <= 1.57) {
      this.pesoIdeal = '45.0 - 60.6 Kg';
    } else if (this.estatura >= 1.58 && this.estatura <= 1.59) {
      this.pesoIdeal = '46.2 - 62.2 Kg';
    } else if (this.estatura >= 1.60 && this.estatura <= 1.61) {
      this.pesoIdeal = '47.4 - 63.7 Kg';
    } else if (this.estatura >= 1.62 && this.estatura <= 1.63) {
      this.pesoIdeal = '48.6 - 65.3 Kg';
    } else if (this.estatura >= 1.64 && this.estatura <= 1.65) {
      this.pesoIdeal = '49.8 - 67.0 Kg';
    } else if (this.estatura >= 1.66 && this.estatura <= 1.67) {
      this.pesoIdeal = '51.0 - 68.6 Kg';
    } else if (this.estatura >= 1.68 && this.estatura <= 1.69) {
      this.pesoIdeal = '52.2 - 70.3 Kg';
    } else if (this.estatura >= 1.70 && this.estatura <= 1.71) {
      this.pesoIdeal = '53.5 - 72.0 Kg';
    } else if (this.estatura >= 1.72 && this.estatura <= 1.73) {
      this.pesoIdeal = '54.7 - 73.7 Kg';
    } else if (this.estatura >= 1.74 && this.estatura <= 1.75) {
      this.pesoIdeal = '56.0 - 75.4 Kg';
    } else if (this.estatura >= 1.76 && this.estatura <= 1.77) {
      this.pesoIdeal = '57.3 - 77.1 Kg';
    } else if (this.estatura >= 1.78 && this.estatura <= 1.79) {
      this.pesoIdeal = '58.6 - 78.9 Kg';
    } else if (this.estatura >= 1.80 && this.estatura <= 1.81) {
      this.pesoIdeal = '59.9 -  80.7Kg';
    } else if (this.estatura >= 1.82 && this.estatura <= 1.83) {
      this.pesoIdeal = '61.3 - 82.5 Kg';
    } else if (this.estatura >= 1.84 && this.estatura <= 1.85) {
      this.pesoIdeal = '62.6 - 84.3 Kg';
    }

    this.persona.edadPersona = this.edad;
    this.persona.estaturaPersona = this.estatura;
    this.persona.imcPersona = this.imc;
    if (this.generoF) {
      this.persona.generoPersona = 'Femenino';
    } else {
      this.persona.generoPersona = 'Masculino';
    }
    this.persona.pesoPersona = this.peso;
    this.personaService.create(this.persona).subscribe(
      (result: any) => {
        console.log('Se guardo el registro correctamente');
      },
      error => {
        console.log(error);
      }
    );
    this.persona = new Persona();
  }

  // formateaValor(valor) {
    // si no es un número devuelve el valor, o lo convierte a número con 2 decimales
    // isNaN(valor) ? valor : parseFloat(valor).toFixed(1);
  // }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.persona = new Persona();
    this.btnNavbar = true;
    this.btnHistorial = false;
  }

  obtenerHistorial() {
    this.personaService.getAll().subscribe(res => {
      this.personas = res;
    });
  }
}
