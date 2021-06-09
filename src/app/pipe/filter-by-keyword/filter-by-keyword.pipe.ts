import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../interfaces';

@Pipe({
  name: 'filterByKeyword'
})
export class FilterByKeywordPipe implements PipeTransform {
  transform(allObj: any, keyword: string) {
    const keywordToLowerCase = !!keyword ? keyword.toLowerCase() : '';

    return allObj.filter((obj: Product) => {
      return !keywordToLowerCase ||
        (obj.name.indexOf(keywordToLowerCase) > -1) ||
        (obj.description.indexOf(keywordToLowerCase) > -1) ||
        (obj.id == +keywordToLowerCase) ||
        (obj.price == +keywordToLowerCase);
    });
  }
}
