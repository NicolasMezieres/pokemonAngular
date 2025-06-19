import { Component, computed, inject } from '@angular/core';
import { PokemonService } from '../../../Service/Pokemon/pokemon-service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { pokemon, pokemonList } from '../../../Utils/type';

@Component({
  selector: 'app-pokemon-list-component',
  imports: [RouterLink],
  templateUrl: './pokemon-list-component.html',
  styleUrl: './pokemon-list-component.css',
})
export class PokemonListComponent {
  readonly #pokemonService = inject(PokemonService);
  pokemons: pokemon[] = [];
  resultSearchPokemon: pokemon[] = [];
  searchTerm: string = '';
  pokemonList$ = this.#pokemonService.getPokemons().subscribe((data) => {
    this.pokemons = data.results;
    this.resultSearchPokemon = this.pokemons;
  });

  isFiltered: boolean = false;
  updateFilter() {
    this.isFiltered = !this.isFiltered;
    if (this.isFiltered) {
      this.resultSearchPokemon = this.resultSearchPokemon.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else {
      this.resultSearchPokemon = this.resultSearchPokemon.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
  }

  searchPokemon(event: Event) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    if (this.searchTerm === '') {
      this.resultSearchPokemon = this.pokemons;
    } else {
      this.resultSearchPokemon = this.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
