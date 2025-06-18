import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../../Service/Pokemon/pokemon-service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { PokemonDetail } from '../../../Utils/type';

@Component({
  selector: 'app-pokemon-detail-component',
  imports: [AsyncPipe],
  templateUrl: './pokemon-detail-component.html',
  styleUrl: './pokemon-detail-component.css',
})
export class PokemonDetailComponent implements OnInit {
  paramId: string | null = '';
  constructor(private route: ActivatedRoute) {
    this.paramId = this.route.snapshot.paramMap.get('id');
  }
  public pokemonService = inject(PokemonService);
  pokemonDetail$!: Observable<PokemonDetail>;
  ngOnInit(): void {
    this.pokemonDetail$ = this.pokemonService.getPokemonDetails(this.paramId);
  }

  // log() {
  //   this.pokemonDetail$.subscribe({ next: (message) => console.log(message) });
  // }
  // log() {
  //   if (this.paramId) {
  //     this.pokemonService.getPokemonDetails(this.paramId).subscribe({
  //       next: (message) => console.log(message),
  //     });
  //   }
  // }
  log(test: any) {
    console.log(test, this.paramId);
  }
}
