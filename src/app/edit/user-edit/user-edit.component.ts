import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = new User()
idUser :number
  constructor(
    private authService : AuthService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
     window.scroll(0,0)

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findbyIdUser(this.idUser)
  }
confirmarSenha(event:any){

}

tipoUser(event:any){

}

atualizar(){

}

findbyIdUser(id: number){
  this.authService.getByIdUser(id).subscribe(( resp: User) => {
    this.user = resp
  })
}
}
