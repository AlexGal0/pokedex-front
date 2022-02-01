import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pokemon } from './model/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'pokedex';
    pokemon: Pokemon|undefined;
    idPokemon: number;
    constructor(private http: HttpClient) { }

    buscar() {
      if(!this.idPokemon) return; 

      this.http.get<Pokemon>(environment.urlGetPokemon + this.idPokemon).subscribe( res => {
          this.pokemon = res;
          console.log(res); 
      });
    }
}
