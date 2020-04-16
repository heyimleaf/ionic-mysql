import { PostProvider } from 'src/providers/post-provider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  clientes : any = [];
  limit : number = 10;
  start : number = 0;


  constructor(private router: Router, private provider: PostProvider) { }


  ngOnInit() {
    this.clientes = [];
    this.start = 0;
    this.Carregar();
  }

  addCliente(){
    this.router.navigate(['/add-cliente']);
  }

  Carregar(){
    return new Promise(resolve => {
      let dados = {
        request : 'getdata',
        limit : this.limit,
        start : this.start
      };
      this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data => {
          for( let cliente of data['result']){
            this.clientes.push(cliente);
          }
          resolve(true);
      });
    });
  }
}
