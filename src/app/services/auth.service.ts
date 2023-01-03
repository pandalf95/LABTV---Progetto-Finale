import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn:boolean;
  private signedUp:boolean;

  constructor(private http:HttpClient) {
    localStorage.getItem("token") ? this.loggedIn = true : this.loggedIn = false;
    this.signedUp = false;
   }

  wsRegister:string = "http://localhost:3000/register"
  wsLogin:string = "http://localhost:3000/login"

  getLoggedIn():boolean {
    return this.loggedIn;
  }

  setLoggedIn(bool:boolean) {
    this.loggedIn = bool;
  }

  getSignedUp():boolean {
    return this.signedUp;
  }

  setSignedUp(bool:boolean) {
    this.signedUp = bool;
  }

  login(user:any):Observable<any> {
    return this.http.post(this.wsLogin, user)
  }

  register(user:any):Observable<any> {
    return this.http.post(this.wsRegister, user)
  }

  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user_id")
    this.setLoggedIn(false);
  }

}
