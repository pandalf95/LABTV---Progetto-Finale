import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { RequestsToDbService } from '../services/requests-to-db.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router, private request:RequestsToDbService) {}

  ngOnInit(): void {
    
  }


  term:string=""
  risultati:any
  
  cerca() {

    if (this.term.length >= 3) {
      this.request.search(this.term).subscribe(
      data => {
        this.risultati = data.results
      }
    )
    }
    
  }

  vaiADettaglio(id:string, media:string) {

    if (media == "tv") {
      this.router.navigate(['dettaglio-tv', id])
    }
    else if (media == "movie") {
      this.router.navigate(['dettaglio-film', id])
    }

  }



}
