import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: false
  };
  
  constructor(private http: HttpClient) { }

  getPokemons(query = ''): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${query}`;
    return this.http.get<any>(url, this._httpOptions);
  }

  getPokemon(url: string): Observable<any> {
    return this.http.get<any>(url, this._httpOptions);
  }

}