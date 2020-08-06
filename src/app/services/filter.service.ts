import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filterObject: BehaviorSubject<Filter> = new BehaviorSubject<Filter>(null);
  
  constructor() { }

  public setFilterObject(filter : Filter): void {
    this.filterObject.next(filter);
  }

}
