import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViaCepService {
  constructor(private httpClient: HttpClient) {}

  searchCep(cep: string): Observable<any> {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      const cepValidated = /^[0-9]{8}$/;

      if (cepValidated.test(cep)) {
        return this.httpClient.get(`//viacep.com.br/ws/${cep}/json`);
      }
      return of({});
    }

    return of({});
  }
}
