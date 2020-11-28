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


  ngOnInit(): void {
  }

}
