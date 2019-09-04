import { Injectable } from '@angular/core';

export class Movie{
  title: string;
  description: string;
  imageUrl: string;

  constructor(title: string,  description?: string,  imageUrl?: string ){
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
   
  }
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie [] = [
    new Movie("Mad Max","Years after the collapse of civilization, the tyrannical Immortan Joe enslaves apocalypse survivors inside the desert fortress the Citadel. When the warrior Imperator Furiosa (Charlize Theron) leads the despot's five wives in a daring escape, she forges an alliance with Max Rockatansky (Tom Hardy), a loner and former captive. Fortified in the massive, armored truck the War Rig, they try to outrun the ruthless warlord and his henchmen in a deadly high-speed chase through the Wasteland.","https://m.media-amazon.com/images/I/91aUSvV+4qL._AC_UY218_.jpg"),
   
  ];
  constructor() { }
  
addMovie(title: string, description: string, imageUrl?: string) {
  const newMovie = new Movie(title, description, imageUrl)
  this.movies.push(newMovie)
  console.log(newMovie)
  }
  deleteMovie(i: number) {
    this.movies.splice(i,1)
  }
  
  getMovies(): Movie [] {
    return this.movies;
    }
  }
  