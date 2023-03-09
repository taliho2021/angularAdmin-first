import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/cust';

@Pipe({
    name: 'search',
    standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(items: Customer[], searchTxt: string): any[] {
    if (!items || !items.length) return items;
    if (!searchTxt || !searchTxt.length) return items;

    return items.filter((item) => {
      return (
        item.custName
          .toString()
          .toLowerCase()
          .indexOf(searchTxt.toLowerCase()) > -1
      );
    });
  }
}
