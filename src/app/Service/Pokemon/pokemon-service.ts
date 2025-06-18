import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail, pokemonList } from '../../Utils/type';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public http = inject(HttpClient);
  readonly apiURL: string = 'https://pokeapi.co/api/v2/';
  constructor() {}

  getPokemons(): Observable<pokemonList> {
    return this.http.get<pokemonList>(this.apiURL + 'pokemon?limit=50');
  }

  getPokemonDetails(id: string | null): Observable<PokemonDetail> {
    console.log(id, 'je suis ici');
    return this.http.get<PokemonDetail>(this.apiURL + 'pokemon/' + id);
  }
}
