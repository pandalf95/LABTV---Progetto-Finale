import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RequestsToDbService } from '../services/requests-to-db.service';

@Component({
  selector: 'app-acquisti',
  templateUrl: './acquisti.component.html',
  styleUrls: ['./acquisti.component.css']
})
export class AcquistiComponent implements OnInit {

  constructor(private request:RequestsToDbService, private auth:AuthService, private router:Router) {}

  acquisti:any

  ngOnInit(): void {
    this.visualizzaAcquisti()
  }

  visualizzaAcquisti() {
    this.request.getAcquisti().subscribe(
      data => {
        this.acquisti = data
      },
      err => {
        if (err.error === "jwt expired") {
          this.auth.logout()
          this.router.navigate(['/login'])
        }
      }
    )
  }

  vaiADettaglio(id:string) {
    this.router.navigate(['dettaglio-film', id])
  }

  restituisci(id:string) {
    this.request.return(id).subscribe(
      data => {
        console.log(data)
        this.visualizzaAcquisti()
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
