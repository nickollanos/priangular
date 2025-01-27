import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

import { UsuariosService } from '../../services/usuarios.service';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-navar',
  imports: [],
  templateUrl: './navar.component.html',
  styleUrl: './navar.component.css'
})
export class NavarComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

// @Output()
// public onDebaunce =  new EventEmitter<string>();

@ViewChild('txtUsuarioInput')
public usuarioInput!: ElementRef<HTMLInputElement>;

constructor( private usuariosService: UsuariosService ) {}

ngOnInit(): void {
  this.debouncerSuscription = this.debouncer
  .pipe(
    debounceTime(300)
  )
  .subscribe( value => {
    // this.onDebaunce.emit( value );
    this.usuariosService.searchUsuarios( value );
  })
  ;
}

ngOnDestroy(): void {
  this.debouncerSuscription?.unsubscribe();
}

searchUsuario( term: string ) {

  this.debouncer.next( term );

  // const newUsuario = this.usuarioInput.nativeElement.value;
  //console.log({ newUsuario});
  // this.usuariosService.searchUsuarios(newUsuario);
  //this.usuarioInput.nativeElement.value = '';
}

}
