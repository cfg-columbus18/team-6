import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './match/match.component';
import { GeneralComponent } from './general/general.component';
import { MentorComponent } from './mentor/mentor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent},
    {
    path: '',
    component: HomeComponent
  },
  {
    path: 'match',
    component: MatchComponent
  },
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'mentor',
    component: MentorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
