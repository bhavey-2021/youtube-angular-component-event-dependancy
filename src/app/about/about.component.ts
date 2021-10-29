import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router : Router) //within brackets we will in "private router : Router" to allow us do the navigation 
  { }

  ngOnInit(): void {
  }

}
