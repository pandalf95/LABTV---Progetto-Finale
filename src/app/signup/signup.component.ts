import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  hide:boolean = true //campo password parte nascosto
  hide2:boolean = true //campo password parte nascosto
  matchPassword = false //se le password corrispondono

  nFocused:boolean = false; //nome se in focus o meno
  eFocused:boolean = false; //email se in focus o meno
  pFocused:boolean = false; //password se in focus o meno
  p2Focused:boolean = false; //password2 se in focus o meno

  switchVisibilityPassword() {
    this.hide = !this.hide
  }

  switchVisibilityPassword2() {
    this.hide2 = !this.hide2
  }

  inviaDati(form:NgForm) {

    const nuovoUtente = form.value

    if (nuovoUtente.password == nuovoUtente.password2) {
      this.matchPassword = true;
    }
    else {
      this.matchPassword = false;
    }
    console.log(nuovoUtente)

    if (form.valid) {
        form.value.password2 = "was-validated"
        this.auth.register(nuovoUtente).subscribe(
        data => {
          this.auth.setSignedUp(true)
          this.router.navigate(['/login'])
          
        },
        err => {
          this.auth.setSignedUp(false)
          console.log(err)
        }
      )
    }

    


  }

}
