import { Component, ElementRef, ViewChild } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-navar',
  imports: [],
  templateUrl: './navar.component.html',
  styleUrl: './navar.component.css'
})
export class NavarComponent {

@ViewChild('txtUsuarioInput')
public usuarioInput!: ElementRef<HTMLInputElement>;

constructor( private usuariosService: UsuariosService ) {}

searchUsuario() {
  const newUsuario = this.usuarioInput.nativeElement.value;
  //console.log({ newUsuario});
  this.usuariosService.searchUsuarios(newUsuario);
  //this.usuarioInput.nativeElement.value = '';
}

}
