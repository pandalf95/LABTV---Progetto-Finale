import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AuthGuardService } from './services/auth-guard.service';

import { AppComponent, SafePipe } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SezioneTvComponent } from './sezione-tv/sezione-tv.component';
import { SezioneFilmComponent } from './sezione-film/sezione-film.component';
import { DettaglioTvComponent } from './dettaglio-tv/dettaglio-tv.component';
import { DettaglioFilmComponent } from './dettaglio-film/dettaglio-film.component';
import { SearchComponent } from './search/search.component';
import { AutoFocusDirective } from './direttive/auto-focus.directive';
import { AcquistiComponent } from './acquisti/acquisti.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SezioneTvComponent,
    SezioneFilmComponent,
    DettaglioTvComponent,
    DettaglioFilmComponent,
    SafePipe,
    SearchComponent,
    AutoFocusDirective,
    AcquistiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
