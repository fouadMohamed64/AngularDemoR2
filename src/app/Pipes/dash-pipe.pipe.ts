import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashPipe',
  standalone: true
})
export class DashPipe implements PipeTransform {

  transform(value:string , separator:string='-') {
    let result = value.split('').join(separator);
    return result;
  }

}

