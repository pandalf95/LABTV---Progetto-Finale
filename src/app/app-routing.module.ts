import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioFilmComponent } from './dettaglio-film/dettaglio-film.component';
import { DettaglioTvComponent } from './dettaglio-tv/dettaglio-tv.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SezioneFilmComponent } from './sezione-film/sezione-film.component';
import { SezioneTvComponent } from './sezione-tv/sezione-tv.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"signup", component:SignupComponent},
  {path:"home", component:HomeComponent, /*canActivate:[AuthGuardService]*/},
  {path:"sezione-tv/:categ", component:SezioneTvComponent},
  {path:"sezione-film/:categ", component:SezioneFilmComponent},
  {path:"dettaglio-tv/:id", component:DettaglioTvComponent},
  {path:"dettaglio-film/:id", component:DettaglioFilmComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
