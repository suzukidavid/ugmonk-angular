import { Component, OnInit } from '@angular/core';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';
import { DataSharingService } from '../../services/data-sharing.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartIcon = faShoppingCart;
  userIcon = faUser;
  public isLoggedIn: boolean;
  public cartItems: Product[] = [];

  constructor(private auth: AuthService,private dataSharing:  DataSharingService) {}

  ngOnInit(): void {
    this.getCartItem();
    this.auth.currentUser.subscribe(data => this.isLoggedIn = data.isLoggedIn);
  }

  public getCartItem(): void {
    this.dataSharing.cartItem.subscribe(data => {
        this.cartItems.push(data);
    });
  }

  public addCartItems(): void {
    this.dataSharing.setCartItemsObject(this.cartItems);
  }

  public logout(): void {
    this.auth.logout();
  }

}
