import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/core/services/general.service';
import { PokemonsService } from 'src/app/core/services/pokemons.service';

interface PokemonDirectoryItem {
  name: string,
  url: string,
  isFavourite: boolean
}

@Component({
  selector: 'app-directory-main',
  templateUrl: './directory-main.component.html',
  styleUrls: ['./directory-main.component.scss']
})
export class DirectoryMainComponent implements OnInit {

  // pokemonList : PokemonDirectoryItem[] = [];
  pokemonList: PokemonDirectoryItem[]= [];
  currentSelectedPokemon: any;
  totalItems = 0;
  nextPageUrl: string = '';
  previousPageUrl: string = '';
  favouritePokemons = new Set();
  queryParams = '';
  itemsPerPage = 10;
  pageOffset = 0;


  constructor(
    private pokemonsService: PokemonsService,
    private generalService: GeneralService
    ) { }

  ngOnInit(): void {
    this.setExistingSettings();
    this.getPokemons();
  }

  getPokemons(): void {

    this.queryParams = `?offset=${this.pageOffset}&limit=${this.itemsPerPage}`;
    this.pokemonsService
      .getPokemons(this.queryParams)
      .subscribe(data=> {
        this.totalItems = data.count;
        // We add the property isFavourite and set to false by default
        this.pokemonList = data.results.map((item: PokemonDirectoryItem) => {
          return {...item, isFavourite: false}
        });
        this.nextPageUrl = data.next;
        this.previousPageUrl = data.previous;
      console.log('data', data);
    });
  }

  //triggered when clicking on pokemon name
  viewPokemonDetails(pokemon: any): void {
    if (pokemon){
      this.getPokemonDetails(pokemon.url);
    }
  }

  toogleAddToFavourite(pokemon: any): void {

    if (pokemon && pokemon.name){

      if(this.favouritePokemons.has(pokemon)){ // Add to the list of favourite
        this.favouritePokemons.delete(pokemon);
        this.generalService.decreaseFavouriteCount();
      } else {
        this.favouritePokemons.add(pokemon);
        this.generalService.increaseFavouriteCount();
      }
      
   
    }

    this.setFavouriteStatus();
  }

  setFavouriteStatus(): void {
      this.pokemonList.forEach(pok=> {
        this.favouritePokemons.has(pok) ? pok.isFavourite = true : pok.isFavourite = false;
      });
  }

  getPokemonDetails(url: string): void {
    this.pokemonsService
      .getPokemon(url)
      .subscribe(pokemon => {
        console.log('pokemon details, pokemon', pokemon);
        this.currentSelectedPokemon = pokemon;
      })
  }

  setExistingSettings(): void {

    if (localStorage.getItem('userFavourite')) {
      const existingUserPref = localStorage.getItem('userFavourite');
      if (existingUserPref) {
        this.itemsPerPage = +JSON.parse(existingUserPref).itemsPerPage;
      }
    } else {
      this.itemsPerPage = 10;
    }
  }


  nextPage(){
    this.pageOffset += this.itemsPerPage;
    this.getPokemons();
  }

  previousPage(){
    this.pageOffset -= this.itemsPerPage;
    this.getPokemons();
  }

}
