import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  constructor(private httpClient: HttpClient) {}

  searchCep(cep: string) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const cepValidated = /^[0-9]{8}$/;

      if (cepValidated.test(cep)) {
        return (
          this.httpClient
            .get(`//viacep.com.br/ws/${cep}/json`)
            // .map((dados: any) => dados.json())
            .subscribe((adress) => {
              console.log(adress);
            })
        );
      }
    }
    return of({});
  }
}
