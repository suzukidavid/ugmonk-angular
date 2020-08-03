import { Component, OnInit, Input } from '@angular/core';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-clothes-card',
  templateUrl: './clothes-card.component.html',
  styleUrls: ['./clothes-card.component.scss']
})
export class ClothesCardComponent implements OnInit {

  rupeeIcon = faRupeeSign;
  @Input() cloth: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
