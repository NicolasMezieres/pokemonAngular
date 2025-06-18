import { Component, inject } from '@angular/core';
import { PokemonService } from '../../../Service/Pokemon/pokemon-service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list-component',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './pokemon-list-component.html',
  styleUrl: './pokemon-list-component.css',
})
export class PokemonListComponent {
  public pokemonService = inject(PokemonService);
  pokemonList$ = this.pokemonService.getPokemons();
}
