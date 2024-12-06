import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchUsers } from '../interfaces/usuarios.interfaces';
import { BehaviorSubject, catchError, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})

export class UsuariosService {

  // private _usuariosHistory: string[] = [];
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  public usuariosListAll : SearchUsers[] = [];
  public usuariosList : SearchUsers[] = [];
  private errorSubject = new BehaviorSubject<string>('');
  public error$ = this.errorSubject.asObservable();

  constructor( private http: HttpClient ) { }

  // get usuariosHistory() {
  //   return this._usuariosHistory;
  // }



  searchUsuarios( usuario: string ):void {
    // usuario = usuario.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
    // console.log(usuario);

    if ( usuario.length === 0) return this.searchAllUsuarios();
    this.usuariosList = this.usuariosListAll.filter(user => { const tusuario = usuario.trim(); return user.name.toLocaleLowerCase().includes(tusuario.toLocaleLowerCase())
      || user.email.toLocaleLowerCase().includes(tusuario.toLocaleLowerCase())});
      console.log(this.usuariosList);

    if( this.usuariosList.length === 0 ){
      this.errorSubject.next('No se encontraron resultados para esa busqueda');
    }


    // if ( usuario.includes('@')){
    //   const params = new HttpParams()
    //     .set('email', usuario )
    //     this.http.get<SearchUsers[]>(`${ this.apiUrl }`, { params })
    //     .pipe( catchError(error => { console.error('Ocurrio un error al consultar los datos: ', error);
    //       this.errorSubject.next('Ocurrio un error al consultar los datos');
    //       return throwError('Ocurrio un error al consultar los datos');
    //     }))
    //     .subscribe( resp => {
    //     //console.log(resp.address);
    //     this.usuariosList = resp;
    //     //console.log( usuario, this.usuariosList);
    //   });
    // } else {
    //   const params = new HttpParams()
    //   .set('name', usuario )

    // //this._usuariosHistory.unshift( usuario );
    // //console.log( this.usuariosHistory );

    // // const params = new HttpParams()
    // //   .set('name', usuario )

    // this.http.get<SearchUsers[]>(`${ this.apiUrl }`, { params })
    // .pipe( catchError(error => { console.error('Ocurrio un error al consultar los datos: ', error);
    //   this.usuariosList = [];
    //   return throwError('Ocurrio un error al consultar los datos');
    // }))
    //   .subscribe( resp => {
    //     //console.log(resp.address);
    //     this.usuariosList = resp;
    //     //console.log( usuario, this.usuariosList);
    //   });
    // }
  }

  searchAllUsuarios( ):void {
    this.http.get<SearchUsers[]>(`${ this.apiUrl }`)
    .pipe( catchError(error => { console.error('Ocurrio un error al consultar los datos: ', error);
      this.errorSubject.next('Ocurrio un error al consultar los datos');
      this.usuariosListAll = [];
      return throwError('Ocurrio un error al consultar los datos');
    }))
      .subscribe( resp => {
        //console.log(resp.address);
        this.usuariosListAll = resp;
        this.usuariosList = resp;
        //console.log( usuario, this.usuariosList);
      });
  }

}
