import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UsuariosModule } from './usuarios/usuarios.module';
import { HomePageComponent } from "./usuarios/pages/home/home-page.component";


@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    UsuariosModule,
    HomePageComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'usersApp';
}
