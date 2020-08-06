import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public filterForm: FormGroup;
  private filterObject: Filter;

  constructor(private filterService :FilterService) { }

  ngOnInit(): void {
    this.makeFilterForm();
  }

  private makeFilterForm(): void {
    this.filterForm = new FormGroup({
      color: new FormControl(''),
      size: new FormControl(''),
      minPrice: new FormControl(''),
      maxPrice: new FormControl('')
    })
  }

  public applyFilter(): void {
    this.filterObject = {
      color: this.filterForm.controls.color.value,
      size: this.filterForm.controls.size.value,
      minPrice: parseInt(this.filterForm.controls.minPrice.value),
      maxPrice: parseInt(this.filterForm.controls.maxPrice.value)
    }
    
    this.filterService.setFilterObject(this.filterObject);
  }

}
