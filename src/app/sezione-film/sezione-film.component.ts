import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsToDbService } from '../services/requests-to-db.service';

@Component({
  selector: 'app-sezione-film',
  templateUrl: './sezione-film.component.html',
  styleUrls: ['./sezione-film.component.css']
})
export class SezioneFilmComponent implements OnInit {

  constructor(private request:RequestsToDbService, private route:ActivatedRoute, private router:Router ) {}

  movies:Array<any> = []
  categoria:string = this.route.snapshot.params['categ']
  page:number = 1

  ngOnInit(): void {
   this.aggiungiCopertine("1")
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollHeight - window.scrollY == window.innerHeight) {
      this.page++
      this.aggiungiCopertine(this.page.toString())
    }
  }

  aggiungiCopertine(page:string) {
    this.request.getRequest("movie", this.categoria, page).subscribe(
      data => {
        for (let movie of data.results) {
          this.movies.push(movie)
        }
      },
      err => {
        console.log(err)
      }
    )
  }

  clickCopertina(id:number) {
    this.router.navigate(['dettaglio-film', id])
  }

 

}
