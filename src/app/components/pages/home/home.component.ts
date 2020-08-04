import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public catId: number = 1;

  constructor() { }

  ngOnInit(): void {
  
  }

  public changeCategory(catId: number): void {
    this.catId = catId;
  }

}
