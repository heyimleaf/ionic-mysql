import { PostProvider } from 'src/providers/post-provider';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Provider } from '@angular/core';
>>>>>>> 80c87e1b47ae7045cca3c54cd109f64032e5b8fe
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

<<<<<<< HEAD

  constructor(private router: Router, private provider: PostProvider) { }
  ionViewWillEnter(){
    this.clientes = [];
    this.start = 0;
    this.Carregar();
  }

  

  ngOnInit() {
   
=======
  constructor(private router: Router, private provider: PostProvider) { }

  ngOnInit() {
    this.clientes = [];
    this.start = 0;
    this.Carregar();
>>>>>>> 80c87e1b47ae7045cca3c54cd109f64032e5b8fe
  }

  addCliente(){
    this.router.navigate(['/add-cliente']);
  }

<<<<<<< HEAD
  Carregar(){
    return new Promise(resolve => {
      let dados = {
        request : 'getdata',
=======
  Carregar() {
    return new Promise(resolve => {
      let dados = {
        request: 'getdata',
>>>>>>> 80c87e1b47ae7045cca3c54cd109f64032e5b8fe
        limit : this.limit,
        start : this.start
      };
      this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data => {
<<<<<<< HEAD
          for( let cliente of data['result']){
            this.clientes.push(cliente);
          }
          resolve(true);
      });
    });
  }

  editar(id, nome, telefone, email){
    this.router.navigate(['/add-cliente/' + id + '/' + nome + '/' + telefone + '/' + email]);

   }
   excluir(id){

    let dados = {
      request : 'excluir',
      id : id
    };

    this.provider.inserirApi(dados, 'inserirCliente.php').subscribe(data => {
       this.ngOnInit();
    });

   }

   mostrar(id, nome, telefone, email){
    this.router.navigate(['/mostrar-cliente/' + id + '/' + nome + '/' + telefone + '/' + email]);

   }
=======
        for( let cliente of data['result']){
          this.clientes.push(cliente)
        }
        resolve(true);
      });
    });
  }
>>>>>>> 80c87e1b47ae7045cca3c54cd109f64032e5b8fe
}
