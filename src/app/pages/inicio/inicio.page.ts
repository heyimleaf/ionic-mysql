import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-provider';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  dadosLogin: any;
  usuario: string;

  componentes: Observable <Componente[]>

  constructor(
    private menu: MenuController, 
    private dataService: DataService,
    private router: Router,
    private provider: PostProvider,
    private storage: NativeStorage,
    public toast: ToastController) { }

    ionViewWillEnter(){
      this.storage.getItem('session_storage').then((res) => {
          this.dadosLogin = res;
          this.usuario = this.dadosLogin.usuario;
          console.log(res);
      });
    }
    
    async logout(){
      this.storage.clear();
      this.router.navigate(['/login']); 
      const toast = await this.toast.create({
        message: 'Logout realizado.',
        duration: 1000,
        color: 'success'
      });
    }
    ngOnInit() {
    this.componentes = this.dataService.getMenu();
  }
  

  toggleMenu(){
    this.componentes = this.dataService.getMenu();
  }

}

