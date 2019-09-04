import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService, Movie} from '../movie.service';
import { templateSourceUrl } from '@angular/compiler';
import{ FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
   movies: Movie[] = [];
  movieIdsBeingEdited = {};
  movieBeingDisplayed: Movie;

  movieForm = this.fb.group({
    title: [''],
    description: [''],
    imageUrl:['']
  })

  valuesChangesSub: any
  constructor(private movieService: MovieService , private fb: FormBuilder) {  
    this.movieService = movieService
         console.log(this.movieForm);
  }

  ngOnInit() { 
    this.valuesChangesSub = this.movieForm.valueChanges.subscribe(
      (res: any) =>{
        console.log(`Form:{movieForm}`)
        console.log(`FormVauleChanged:{res}`)
        },
        err => {
          console.log(`Error:{err}`)
  
        },
         () => {
          console.log(`Done`)
  
        }
      );
      this.getMovies();

  }

  ngOnDestroy(){
    if(this.valuesChangesSub){
      this.valuesChangesSub.unsubscribe();
    }
  }
  onDeleteMovie(i: number) {
    this.movieService.deleteMovie(i);
    this.getMovies();
  }

  onStartEditMovie(i: number) {
    this.movieIdsBeingEdited[i] = true;
  }

  getMovies() {
    setTimeout(() => {
      this.movies = this.movieService.getMovies();
    }, 0);
  }

  onViewMovieDescription(movie: Movie) {
    this.movieBeingDisplayed = movie;
  }
  onSaveEditMovie(i: number){
    this.movieIdsBeingEdited[i] = false;
    } 
}


