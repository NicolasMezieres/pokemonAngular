import { Routes } from '@angular/router';
import { PokemonListComponent } from './Component/Pokemon/pokemon-list-component/pokemon-list-component';
import { PokemonDetailComponent } from './Component/Pokemon/pokemon-detail-component/pokemon-detail-component';

export const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
