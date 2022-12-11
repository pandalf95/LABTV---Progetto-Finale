import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestsToDbService } from '../services/requests-to-db.service';

@Component({
  selector: 'app-sezione-tv',
  templateUrl: './sezione-tv.component.html',
  styleUrls: ['./sezione-tv.component.css']
})
export class SezioneTvComponent implements OnInit {

  constructor(private request:RequestsToDbService, private route:ActivatedRoute, private router:Router) {}

  copertine:any

  categoria:string = this.route.snapshot.params['categ']

  ngOnInit(): void {
   this.aggiungiCopertine()
  }

  aggiungiCopertine() {
    this.request.getRequest("tv", this.categoria).subscribe(
      data => {
        this.copertine = data.results
      },
      err => {
        console.log(err)
      }
    )
  }

  clickCopertina(id:string) {
    this.router.navigate(['dettaglio-tv', id])
  }

}
