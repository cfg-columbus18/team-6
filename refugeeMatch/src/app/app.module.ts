import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatchComponent } from './match/match.component';
import { MentorComponent } from './mentor/mentor.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'; 
import { AdunitService } from './adunit.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MatchComponent,
    MentorComponent,
    GeneralComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AdunitService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
