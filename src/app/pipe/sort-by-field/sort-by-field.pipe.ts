import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByField'
})

export class SortByFieldPipe implements PipeTransform {
  transform(allObj: any[], field: string) {
    if (!field) return allObj;

    return allObj.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }
      if (a[field] > b[field]) {
        return 1;
      }
      return 0;
    });

  }
}
