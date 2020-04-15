import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {
    server: string = "http://localhost/api/";

    constructor(private http: HttpClient) {

    }

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