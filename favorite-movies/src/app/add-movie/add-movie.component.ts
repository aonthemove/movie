import { Component, OnInit } from '@angular/core';
import { MovieService, Movie} from '../movie.service';
import { templateSourceUrl } from '@angular/compiler';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movie: Movie[] = [];
  newMovieTitle: string = "";
  newMovieDescription: string = "";
  newMovieImageUrl: string = "";


  constructor(private movieService: MovieService) { 
      this.movieService = movieService

    }

  ngOnInit() {
    
  }
 


  onCreateNewMovie(newMovieTitle: string, newMovieDescription: string, newMovieImageUrl: string  ) {
    this.movieService.addMovie(newMovieTitle, newMovieDescription,  newMovieImageUrl);
    this.newMovieTitle = "";
    this.newMovieDescription = "";
    this.newMovieImageUrl = "";
    this.getMovies();
  }
  
  getMovies() {
    setTimeout(() => {
      this.movie = this.movieService.getMovies();
    }, 0);
  }
}
