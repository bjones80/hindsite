import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
