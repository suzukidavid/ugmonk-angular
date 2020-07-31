import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clothes = [{
    id: 1,
    name: 'Mountains',
    price: '1200',
    color: 'Black',
    category: 'men',
    image: 'https://i.ibb.co/55z32tw/long-sleeve.png',
    size: ['sm','md','lg','xl','xxl']
  },
  {
    id: 2,
    name: 'Men\'s Essential',
    price: '2500',
    color: 'Blue',
    category: 'men',
    image: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
    size: ['sm','md','lg','xl','xxl']
  },
  {
    id: 3,
    name: 'Men\'s Essential',
    price: '2500',
    color: 'Brown',
    category: 'men',
    image: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
    size: ['sm','md','lg','xl','xxl']
  },
  {
    id: 4,
    name: 'Classic Tee',
    price: '1800',
    color: 'Blue',
    category: 'men',
    image: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
    size: ['sm','md','lg','xl','xxl']
  },
  {
    id: 5,
    name: 'Polka Dot',
    price: '4000',
    color: 'Red',
    category: 'women',
    image: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
    size: ['sm','md','lg','xl','xxl']
  },
  {
    id: 6,
    name: 'Women\'s Essential',
    price: '3000',
    color: 'Yellow',
    category: 'women',
    image: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
    size: ['sm','md','lg','xl','xxl']
  },
  {
    id: 7,
    name: 'Floral',
    price: '2500',
    color: 'White',
    category: 'women',
    image: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
    size: ['sm','md','lg','xl','xxl']
  },
  {
    id: 8,
    name: 'Heaven\'s Pearl',
    price: '5000',
    color: 'White',
    category: 'women',
    image: 'https://i.ibb.co/qBcrsJg/white-vest.png',
    size: ['sm','md','lg','xl','xxl']
  }]

  selectedClothes = [];

  constructor() { }

  ngOnInit(): void {
    this.selectClothes('men');
  }

  selectClothes(selectedCategory: string): void {
    this.selectedClothes = this.clothes.filter(({category}) => category === selectedCategory);
  }
  

}
