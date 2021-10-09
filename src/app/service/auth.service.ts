

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../Model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://blogrenata.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://blogrenata.herokuapp.com/usuarios/cadastrar', user)
  }

  atualizar(user: User): Observable<User> {
    return this.http.put<User>('https://blogrenata.herokuapp.com/usuarios/atualizar', user)
  }

  getByUser(id: number): Observable<User> {
    return this.http.get<User>(`https://blogrenata.herokuapp.com/usuarios/${id}`)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }
    return ok
  }
}