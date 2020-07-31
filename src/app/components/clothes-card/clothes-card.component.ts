import { Component, OnInit, Input } from '@angular/core';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clothes-card',
  templateUrl: './clothes-card.component.html',
  styleUrls: ['./clothes-card.component.scss']
})
export class ClothesCardComponent implements OnInit {

  rupeeIcon = faRupeeSign;
  @Input() cloth;

  constructor() { }

  ngOnInit(): void {
  }

}
