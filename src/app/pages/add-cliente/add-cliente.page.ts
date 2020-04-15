import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Cliente(){
    this.router.navigate(['/clientes'])
  }

  Cadastrar(){

  }
}
