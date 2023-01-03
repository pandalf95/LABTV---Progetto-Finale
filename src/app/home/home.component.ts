import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RequestsToDbService } from '../services/requests-to-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private auth:AuthService, private request:RequestsToDbService, private route:ActivatedRoute) {
    
  }

  clickFuori:boolean=true

  popularsTv:any;
  popularsCover:any;

  topRatedTv:any;
  topRatedCoverTv:any;

  onAirTv:any;
  onAirTvCover:any;

  upcomingMovies:any;
  upcomingMoviesCover:any

  topRatedMovies:any;
  topRatedMoviesCover:any;

  popularMovies:any;
  popularMoviesCover:any;

  ngOnInit(): void {
    this.getPopularsTv()
    this.getTopRatedTv()
    this.getUpcomingMovies()
    this.getTopRatedMovies()
    this.getPopularMovies()
    this.getOnAirTv()
  }

  

  getTopRatedTv() {

    this.request.getRequest("tv", "top_rated").subscribe(
      data => {
        this.topRatedTv = data.results
        this.topRatedCoverTv = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }

  getPopularsTv() {
    this.request.getRequest("tv", "popular").subscribe(
      data => {
        this.popularsTv = data.results
        this.popularsCover = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }

  getOnAirTv() {
    this.request.getRequest("tv", "on_the_air").subscribe(
      data => {
        this.onAirTv = data.results
        this.onAirTvCover = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }

  getUpcomingMovies() {
    this.request.getRequest("movie", "upcoming").subscribe(
      data => {
        this.upcomingMovies = data.results
        this.upcomingMoviesCover = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }

  getTopRatedMovies() {
    this.request.getRequest("movie", "top_rated").subscribe(
      data => {
        this.topRatedMovies = data.results
        this.topRatedMoviesCover = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }

  getPopularMovies() {
    this.request.getRequest("movie", "popular").subscribe(
      data => {
        this.popularMovies = data.results
        this.popularMoviesCover = data.results[this.getNumeroRandom()]
      },
      err => {
        console.log(err)
      }
    )
  }

  vaiASezioneTv(categoria:string) {
    this.router.navigate(['sezione-tv', categoria])
  }

  vaiASezioneFilm(categoria:string) {
    this.router.navigate(['sezione-film', categoria])
  }

  getNumeroRandom() {
    return Math.floor(Math.random()*10)
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
