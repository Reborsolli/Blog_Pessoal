import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemaEditComponent } from 'src/app/edit/tema-edit/tema-edit.component';
import { Tema } from 'src/app/Model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {
  tema: Tema = new Tema
idtema : number
  constructor(
    private temaService: TemaService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(){
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

  this.idtema  = this.route.snapshot.params['id']
    this.findByTemaId(this.idtema)
  }
findByTemaId (id: number){
  this.temaService.getByIdTema(id).subscribe((resp :Tema) =>{
    this.tema = resp
  })
}

apagar(){
  this.temaService.deleteTema(this.idtema).subscribe(() =>{
    alert('Tema Apagado')
    this.router.navigate(['/tema'])
  })
}
}
