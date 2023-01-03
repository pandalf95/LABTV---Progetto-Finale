import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsToDbService } from '../services/requests-to-db.service';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-dettaglio-film',
  templateUrl: './dettaglio-film.component.html',
  styleUrls: ['./dettaglio-film.component.css']
})
export class DettaglioFilmComponent implements OnInit {

  id:string = this.route.snapshot.params['id']

  constructor(private request:RequestsToDbService, private route:ActivatedRoute, private location:Location, private router:Router, private auth:AuthService) {

    this.route.paramMap.subscribe(params => {
      this.id = this.route.snapshot.params['id']
      
      this.ngOnInit()
      window.scroll({top:0, left:0})
    })

  }

  
  dettagli:any
  video:any
  acquistato:boolean = false;
  idAcquisto:any
  similarMovies:any
  mostraTrailer:boolean = false;
  simili:boolean = false;

  ngOnInit(): void {
    this.simili = false;
    this.richiestaDettaglio()
    this.richiestaVideo()
    this.richiestaSimili()
    this.check()
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
  
      },
      err => {
        console.log(err)
      }
    )
  }

  compra() {
    this.request.buy({title:this.dettagli.title, poster_path: this.dettagli.poster_path, media_id: this.id, id:null}).subscribe(
      data => {
        this.acquistato = true
        this.idAcquisto = data.id
      },
      err => {
        if (err.error === "jwt expired") {
          this.auth.logout()
          this.router.navigate(['/login'])
        }
      }
    )
  }

  restituisci () {
    this.request.return(this.idAcquisto).subscribe(
      data=> {
        this.acquistato = false
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

  check() {
    this.request.checkAcquistato(this.id).subscribe(
      data => {
        if (data.length == 0) {
          this.acquistato = false
        }
        else {
          this.acquistato = true
          this.idAcquisto = data[0].id
        }
      },
      err => {
        if (err.error === "jwt expired") {
          this.auth.logout()
          this.router.navigate(['/login'])
        }
      }
    )
  }

}
