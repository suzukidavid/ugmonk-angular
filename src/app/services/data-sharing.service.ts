import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root'
})
export class DataSharingService {
    public clothesList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);
    public cartItem: Subject<Product> = new Subject<Product>();
    public cartItemsObject: Product[] = [];

    public setCartItem(product: Product): void {
        this.cartItem.next(product);
    }

    public setClothesList(clothes: Product[]): void {
        this.clothesList.next(clothes);
    }

    public setCartItemsObject(products: Product[]): void {
        this.cartItemsObject = products;
    }

    public getCartItemsObject(): Product[] {
        return this.cartItemsObject;
    }

}

