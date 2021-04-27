import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokeDetail, PokeServiceRes } from './pokemon';

const url = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  
  constructor(private http: HttpClient) {   }

  getPokemons() : Observable<PokeServiceRes>{
      return this.http.get<PokeServiceRes>(url);
  }

  getPokemonInfo(id:string) : Observable<PokeDetail>{
    var newid: number = +id+1 //on incremente de 1 l'id reçu en paramètre car il y a un décalage dans l'api
    return this.http.get<PokeDetail>(url + newid + '/');
}
}
