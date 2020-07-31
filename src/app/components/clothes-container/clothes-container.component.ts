import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-clothes-container',
  templateUrl: './clothes-container.component.html',
  styleUrls: ['./clothes-container.component.scss']
})
export class ClothesContainerComponent implements OnInit {

  @Input() clothes = [];

  constructor() { }

  ngOnInit(): void {
  }

}
