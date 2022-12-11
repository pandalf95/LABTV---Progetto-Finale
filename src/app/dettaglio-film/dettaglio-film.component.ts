import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsToDbService } from '../services/requests-to-db.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-dettaglio-film',
  templateUrl: './dettaglio-film.component.html',
  styleUrls: ['./dettaglio-film.component.css']
})
export class DettaglioFilmComponent implements OnInit {

  id:string = this.route.snapshot.params['id']

  constructor(private request:RequestsToDbService, private route:ActivatedRoute, private location:Location, private router:Router) {

    this.route.paramMap.subscribe(params => {
      this.id = this.route.snapshot.params['id']
      
      this.ngOnInit()
      window.scroll({top:0, left:0})
    })

  }

  
  dettagli:any
  video:any
  similarMovies:any
  mostraTrailer:boolean = false;
  simili:boolean = false;

  ngOnInit(): void {
    this.simili = false;
    this.richiestaDettaglio()
    this.richiestaVideo()
    this.richiestaSimili()
  }

  richiestaDettaglio() {
    this.request.getDetail("movie", this.id).subscribe(
      data => {
        this.dettagli = data
        console.log(this.id)
      },
      err => {
        console.log(err)
      }
    )
  }

  richiestaVideo() {
    this.request.getDetail("movie", this.id + "/videos").subscribe(
      data => {
        this.video = data.results[0]
      },
      err => {
        console.log(err)
      }
    )
  }

  richiestaSimili() {
    this.request.getDetail("movie", this.id + "/similar").subscribe(
      data => {
        this.similarMovies = data.results
        console.log(this.similarMovies)
      },
      err => {
        console.log(err)
      }
    )
  }

  goBack() {
    this.location.back()
  }

  clickCopertina(id:number) {
    this.router.navigate(['../dettaglio-film', id])
  }

  mostraSimili() {
    this.simili = !this.simili
    setTimeout(() => window.scroll({top:350, left: 0}),1)
    
  }

}
