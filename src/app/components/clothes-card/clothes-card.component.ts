import { Component, OnInit, Input } from '@angular/core';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-clothes-card',
  templateUrl: './clothes-card.component.html',
  styleUrls: ['./clothes-card.component.scss']
})
export class ClothesCardComponent implements OnInit {

  rupeeIcon = faRupeeSign;
  @Input() cloth: Product;

  constructor(private dataSharing:  DataSharingService,private productApi: ProductsService) { }

  ngOnInit(): void {
  }

  public addToCart(): void {
    this.productApi.addItemsToCart(this.cloth).subscribe(data => console.log(data))
    // this.dataSharing.setCartItem(this.cloth);
  }
}
