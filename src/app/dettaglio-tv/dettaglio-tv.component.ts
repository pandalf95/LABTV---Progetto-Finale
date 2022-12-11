import { Location } from '@angular/common';
import { AfterViewInit, Component, Renderer2} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsToDbService } from '../services/requests-to-db.service';

@Component({
  selector: 'app-dettaglio-tv',
  templateUrl: './dettaglio-tv.component.html',
  styleUrls: ['./dettaglio-tv.component.css']
})
export class DettaglioTvComponent {

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
  similarShows:any
  mostraTrailer:boolean = false;
  simili:boolean = false;

  ngOnInit(): void {
    this.simili = false;
    this.richiestaDettaglio()
    this.richiestaVideo()
    this.richiestaSimili()
  }

  richiestaDettaglio() {
    this.request.getDetail("tv", this.id).subscribe(
      data => {
        this.dettagli = data
      },
      err => {
        console.log(err)
      }
    )
  }

  richiestaVideo() {
    this.request.getDetail("tv", this.id + "/videos").subscribe(
      data => {
        this.video = data.results[0]
      },
      err => {
        console.log(err)
      }
    )
  }

  richiestaSimili() {
    this.request.getDetail("tv", this.id + "/similar").subscribe(
      data => {
        this.similarShows = data.results
        console.log(this.similarShows)
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
    this.router.navigate(['../dettaglio-tv', id])
  }

  mostraSimili() {
    this.simili = !this.simili
    setTimeout(() => window.scroll({top:350, left: 0}),1)
    
  }

}
