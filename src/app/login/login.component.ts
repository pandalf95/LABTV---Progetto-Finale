import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  hide:boolean = true //campo password parte nascosto
  eFocused:boolean = false; //email se in focus o meno
  pFocused:boolean = false; //password se in focus o meno
  errMessage:string = ""; //possibile messaggio di errore login
  registrato:boolean = this.auth.getSignedUp() //controllo se sono arrivato alla pagina di login dopo la registrazione
  loader:boolean = false;

  switchVisibilityPassword() {
    this.hide = !this.hide
  }

  inviaDati(form:NgForm) {

    if (form.valid) {
      this.auth.login(form.value).subscribe(
        data => {
          
          localStorage.setItem("token", data.accessToken)
          this.auth.setLoggedIn(true);
          this.auth.setSignedUp(false);
          this.loader = true;

          setTimeout(
            () => {
              this.loader = false;
              this.router.navigate(['home'])
            }, 2000
          )
         
        },
        err => {
          console.log(err)
          this.auth.setLoggedIn(false);

          switch (err.error) {

            case "Cannot find user":
                this.errMessage = "La tua mail non corrisponde a nessun utente registrato"
            break;

            case "Incorrect password":
                this.errMessage = "La password inserita non è corretta"
            break;

            default:
              this.errMessage = ""
            break;
          }
        }
      )
    }


  }

}
