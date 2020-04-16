import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-provider';


@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  nome: string = "";
  telefone: string = "";
  email: string = "";

  constructor(private router: Router, private provider: PostProvider) { }

  ngOnInit() {
  }

  Cliente() {
    this.router.navigate(['/clientes'])
  }

  Cadastrar() {
    return new Promise(resolve => {
      let dados = {
        request: 'add',
        nome: this.nome,
        telefone: this.telefone,
        email: this.email
      };
      this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data =>{
        this.router.navigate(['/clientes']);
      });
     
   
    });
  }
}
