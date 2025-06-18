import { Component, inject, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonService } from './Service/Pokemon/pokemon-service';
import { PokemonListComponent } from './Component/Pokemon/pokemon-list-component/pokemon-list-component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // pokemonList$ = this.pokemonService.getPokemons().subscribe({
  //   next: (data) => {
  //     console.log(data);
  //     this.listPokemon.push(data);
  //   },
  // });
}
