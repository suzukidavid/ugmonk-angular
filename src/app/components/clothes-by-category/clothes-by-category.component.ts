import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-clothes-by-category',
  templateUrl: './clothes-by-category.component.html',
  styleUrls: ['./clothes-by-category.component.scss'],
})
export class ClothesByCategoryComponent implements OnChanges {
  @Input() catId: number;
  public selectedClothes: Product[] = [];

  constructor(private productApi: ProductsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getClothesByCategoryId();
  }

  public getClothesByCategoryId(): void {
    this.productApi.getProductByCategoryId(this.catId).subscribe(
      (data) => (this.selectedClothes = data),
      (error) => console.log('Error in getClothesByCategoryId ', error)
    );
  }
}
