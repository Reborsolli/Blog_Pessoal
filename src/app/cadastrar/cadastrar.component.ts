import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

user: User = new User
confirmaSenha: string
TipoUser: string

  constructor(
    private authService: AuthService ,
    private router : Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
    
  }
 confirmSenha(event:any){
   this.confirmaSenha = event.target.value
 }

 tipoUser (event : any){
  this.TipoUser = event.target.value
}

cadastrar(){

  this.user.tipo = this.TipoUser

  if (this.user.senha !=this.confirmaSenha){
    alert('A senha está incorreta')
  }else{
    this.authService.cadastrar(this.user).subscribe((resp:User) => {
      this.user = resp
      this.router.navigate(['/entrar'])
    alert('Usuario Cadastrado')
    })
  }

}
}