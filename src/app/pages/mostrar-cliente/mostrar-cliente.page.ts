import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from 'src/providers/post-provider';

@Component({
  selector: 'app-mostrar-cliente',
  templateUrl: './mostrar-cliente.page.html',
  styleUrls: ['./mostrar-cliente.page.scss'],
})
export class MostrarClientePage implements OnInit {

  nome: string = "";
  telefone: string = "";
  email: string = "";
  id: number;

  constructor(private router: Router,
    private provider: PostProvider, 
    public toastController: ToastController,
    private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(( data: any ) =>{
      this.id = data.id;
      this.nome = data.nome;
      this.telefone = data.telefone;
      this.email = data.email;
      console.log(data);
    });
  }

}
