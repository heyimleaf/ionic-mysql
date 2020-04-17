import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostProvider } from 'src/providers/post-provider';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  nome: string = "";
  telefone: string = "";
  email: string = "";
  id: number;
 

  constructor(private router: Router,
              private provider: PostProvider, 
              public toastController: ToastController,
              private actRoute: ActivatedRoute) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Salvo com sucesso.',
      duration: 2000,
      color: "success"
    });
    toast.present();
  }

  async presentToastEditar() {
    const toast = await this.toastController.create({
      message: 'Editado com sucesso.',
      duration: 2000,
      color: "alert"
    });
    toast.present();
  }

  ngOnInit() {
    this.actRoute.params.subscribe(( data: any ) =>{
      this.id = data.id;
      this.nome = data.nome;
      this.telefone = data.telefone;
      this.email = data.email;
      console.log(data);
    });
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
      this.provider.inserirApi(dados, 'inserirCliente.php')
        .subscribe(data =>{
            this.router.navigate(['/clientes']);
            this.presentToast();
        });
    });
  }

  Editar() {
    return new Promise(resolve => {
      let dados = {
        request: 'editar',
        nome: this.nome,
        telefone: this.telefone,
        email: this.email,
        id: this.id
      };
      this.provider.inserirApi(dados, 'inserirCliente.php')
        .subscribe(data =>{
            this.router.navigate(['/clientes']);
            this.presentToastEditar();
        });
    });
  }
}