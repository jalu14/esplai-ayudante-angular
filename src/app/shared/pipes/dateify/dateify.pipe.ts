import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateify'
})
export class DateifyPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const momentDate = moment(value, 'DD-MM-YYYY');
    return momentDate.format('LL');
  }

}
