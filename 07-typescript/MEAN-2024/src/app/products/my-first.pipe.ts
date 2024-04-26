import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirst'
})
export class MyFirstPipe implements PipeTransform {

  transform(value: any[], keyword: string): any[] {
    if (!keyword) {
      return value;
    } else {
      return value.filter((item) => {
        return item.title.toLowerCase().startsWith(keyword);
      })
    }
  }

}
