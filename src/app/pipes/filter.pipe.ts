import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
import { Filter } from '../models/filter';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], args: Filter): Product[] {
    if(args) {
      return value.reduce((acc, val) => {
        if (
          (!args.color || args.color === val.color) &&
          (!args.minPrice || args.minPrice <= val.price) &&
          (!args.maxPrice || args.maxPrice >= val.price) &&
          (!args.size || val.size.includes(args.size))
        ) {
          acc.push(val);
        }
  
        return acc;
      }, []);
    }
    return value;
  }
}
