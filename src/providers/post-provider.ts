import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { map } from 'rxjs/operators';

@Injectable()
export class PostProvider {
    server: string = "http://localhost/api/inserirCliente.php";

    constructor(private http: HttpClient) { }

    inserirApi(dados: any) {
        return new Promise((resolve, reject) => {
            let url = this.server;
            this.http.post(url, dados)
                .subscribe((result: any) => {
                    resolve(result.json());
                },
                    (error) => {
                        reject(error.json())
                    }
                )
        });
    }
}