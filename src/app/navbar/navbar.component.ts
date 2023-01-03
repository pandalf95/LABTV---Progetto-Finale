import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) {}

  clickFuori:boolean=true

  scrolled:boolean=false

  ngOnInit(): void {
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 50) {
      this.scrolled = true
    }
    else {
      this.scrolled = false
    }
  }

  logout() {
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
