import { Component, OnInit } from '@angular/core';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartIcon = faShoppingCart;
  userIcon = faUser;
  
  constructor() { }

  ngOnInit(): void {
  }

}
