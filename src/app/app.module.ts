import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {UsuarioService} from './services/usuario.service';
import {PersonaService} from './services/persona.service';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule,
      NgbModule
    ],
  providers: [UsuarioService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
