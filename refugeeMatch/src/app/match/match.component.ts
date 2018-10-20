import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {


  show: boolean = false;
  constructor() { }

  ngOnInit() {
    
  }
  Show(): void {
    this.show = !this.show;
  }
}
export class Match{

  country: string;
  language: string;
  time: string;
  topic1: string;
  topic2: string;
  topic3: string;
  other: string;

  constructor(country,language,time,topic1, topic2, topic3){
      this.country = country;
      this.language = language;
      this.time = time;
      this.topic1 = topic1;
      this.topic2 = topic2;
      this.topic3 = topic3;

  }
}
