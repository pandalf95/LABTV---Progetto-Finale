import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsToDbService {

  constructor(private http:HttpClient) { }

  apiKey:string = "0beeef6e00436f0cd6dac66b99cecac0"

  section:string = ""
  categoria:string = ""
  page:string = ""
  id:string = ""

  // httpOptions = {
  //   headers: new HttpHeaders (
  //     {"Authorization": `Bearer ${this.token}`}
  //   )
  // }

  getRequest(section:string, categoria:string, page:string = "1"):Observable<any> {
    this.section = section
    this.categoria = categoria
    this.page = page;
    let wsRequest = `https://api.themoviedb.org/3/${this.section}/${this.categoria}?api_key=${this.apiKey}&language=it&page=${this.page}`
    return this.http.get(wsRequest)
  }

  getDetail(section:string, id:string):Observable<any> {
    this.section = section
    this.id = id
    let wsRequest = `https://api.themoviedb.org/3/${this.section}/${this.id}?api_key=${this.apiKey}&language=it`
    return this.http.get(wsRequest)
  }

}
