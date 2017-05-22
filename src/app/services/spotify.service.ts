import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import  'rxjs/add/operator/map';



@Injectable()
export class SpotifyService {

artistas:any[]=[];
  constructor(private http:Http) { }
  urlBusqueda:string="https://api.spotify.com/v1/search"

getArtistas(termino:string){
	let query='?q=${termino}&type=artist'
    let url=this.urlBusqueda+query;
    return this.http.get(url).map(res=>{
    	this.artistas=res.json().artists.items;
	console.log(res.json().artists.items);
})
}
}
