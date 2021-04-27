import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeDetail, Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})
export class MyComponentComponent implements OnInit {

  myDate: Date;

  id: string = '';
  selectedPokeId:string;
  searchPokeName = '';
  pokeDetail: PokeDetail;
  pokes : Pokemon[] = [];
  constructor(private pokeService : PokeAPIServiceService,
              private pokeShareInfoService : PokeShareInfoService) { 
    /*this.pokes.push(new Pokemon('1', 'Pikachu'));
    this.pokes.push(new Pokemon('2', 'bublbasaur'));
    this.pokes.push(new Pokemon('3', 'ivysaur'));
    this.pokes.push(new Pokemon('4', 'venusaur'));
    this.pokes.push(new Pokemon('5', 'charmander'));*/
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' + index, e.name, e.url));
    });
  })
  }

  go(){
    if(this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe((data) =>{this.pokeDetail = data })
      this.pokeShareInfoService.setValue(this.selectedPokeId);
    }
  }
}
