import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pd'
})
export class PdPipe implements PipeTransform {
  nvalue="Evening"
  transform(value: unknown, ...args: unknown[]): unknown {

    this.nvalue = this.nvalue.split('').reverse().join('');

    return this.nvalue;
  }

}
