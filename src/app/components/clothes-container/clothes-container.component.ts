import { Component, OnInit , Input} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-clothes-container',
  templateUrl: './clothes-container.component.html',
  styleUrls: ['./clothes-container.component.scss']
})
export class ClothesContainerComponent implements OnInit {

  @Input() clothes: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
