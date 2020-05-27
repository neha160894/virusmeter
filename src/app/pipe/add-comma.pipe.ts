import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addComma'
})
export class AddCommaPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
