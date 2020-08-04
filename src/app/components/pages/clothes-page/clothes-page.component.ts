import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-clothes-page',
  templateUrl: './clothes-page.component.html',
  styleUrls: ['./clothes-page.component.scss'],
})
export class ClothesPageComponent implements OnInit {
  public selectedClothes: Product[] = [];
  public searchInput: string;
  public searchResults: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productApi: ProductsService
  ) {}

  ngOnInit(): void {
    this.getClothesByCategoryId();
  }

  public getClothesByCategoryId(): void {
    this.productApi
      .getProductByCategoryId(this.route.snapshot.params.catId)
      .subscribe(
        (data) => (this.selectedClothes = data),
        (error) => console.log('Error in getClothesByCategoryId ', error)
      );
  }

  public getSearchResults(): void {
    if(this.searchInput.replace(" ","") === "")
      this.searchResults = []
    else 
      this.searchResults = this.selectedClothes
        .map(({ title,id }) => ({title,id}))
        .filter(({title}) => title.toLowerCase().includes(this.searchInput.toLowerCase()));        
  }
}
