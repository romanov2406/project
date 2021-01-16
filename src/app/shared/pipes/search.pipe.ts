import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(locked: any, query: string): any {
    if(!query) {
      return locked;
    }
    return locked.filter((lock) => {
      return lock.name.toLowerCase().match(query.toLowerCase());
    });
  }
}
