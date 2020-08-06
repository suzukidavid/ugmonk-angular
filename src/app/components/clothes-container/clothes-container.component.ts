import { Component, OnInit , Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { FilterService } from '../../services/filter.service';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-clothes-container',
  templateUrl: './clothes-container.component.html',
  styleUrls: ['./clothes-container.component.scss']
})
export class ClothesContainerComponent implements OnInit {

  @Input() clothes: Product[] = [];
  public filterObj: Filter;

  constructor(private filterService :FilterService) { }

  ngOnInit(): void {
    this.filterService.filterObject.subscribe(data => this.filterObj = data);
  }

}
