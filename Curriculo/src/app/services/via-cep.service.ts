import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  private readonly viaCepApi = 'https://viacep.com.br/ws/01001000/json';

  constructor(private httpClient: HttpClient) {}

  searchCep(cep: string) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const cepValidated = /^[0-9]{8}$/;

      if (cepValidated.test(cep)) {
        return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`);
      }
    }
    return of({});
  }
}
