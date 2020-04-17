import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
<<<<<<< HEAD

=======
>>>>>>> 80c87e1b47ae7045cca3c54cd109f64032e5b8fe

@Injectable()
export class PostProvider {
    server: string = "http://localhost/api/";

    constructor(private http: HttpClient) { }

    inserirApi(dados: any, api: string)  {
<<<<<<< HEAD

           
=======
>>>>>>> 80c87e1b47ae7045cca3c54cd109f64032e5b8fe
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        let url = this.server + api;
        return this.http.post(url, JSON.stringify(dados), httpOptions)
        .map(res => res);
    }
}