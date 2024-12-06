import { Component } from '@angular/core';

import { HomeComponent } from "../../components/home/home.component";
import { NavarComponent } from "../../components/navar/navar.component";
import { PaginatorComponent } from "../../components/paginator/paginator.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { UsuariosService } from '../../services/usuarios.service';
import { SearchUsers } from '../../interfaces/usuarios.interfaces';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeComponent,
    NavarComponent,
    //PaginatorComponent,
    FooterComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor( private usuariosService: UsuariosService ) {

  }

  get usuarios(): SearchUsers[] {
    return this.usuariosService.usuariosList;
  }

}
