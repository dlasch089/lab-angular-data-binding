import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

 transform(items: any[], term: string): any {
    return term
      ? items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
      : items;
  }

}
