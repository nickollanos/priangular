import { Component, Input } from '@angular/core';
import { SearchUsers } from '../../interfaces/usuarios.interfaces';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input()
  public usuarios: SearchUsers[] = [];
  public error: string = '';

  constructor(private  usuariosService: UsuariosService) {

  }

  ngOnInit(): void {
    this.usuariosService.searchAllUsuarios();

    this.usuariosService.error$.subscribe(error => { this.error = error; });
    console.log(this.usuariosService.error$);

  }


}
