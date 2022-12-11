import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestsToDbService } from '../services/requests-to-db.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-dettaglio-film',
  templateUrl: './dettaglio-film.component.html',
  styleUrls: ['./dettaglio-film.component.css']
})
export class DettaglioFilmComponent implements OnInit {

  constructor(private request:RequestsToDbService, private route:ActivatedRoute, private location:Location) {}

  id:string = this.route.snapshot.params['id']
  dettagli:any
  video:any
  similarMovies:any

  ngOnInit(): void {
    this.richiestaDettaglio()
    this.richiestaVideo()
    this.richiestaSimili()
  }

 

  richiestaDettaglio() {
    this.request.getDetail("movie", this.id).subscribe(
      data => {
        this.dettagli = data
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

}
