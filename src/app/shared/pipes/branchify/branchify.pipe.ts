import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'branchify'
})
export class BranchifyPipe implements PipeTransform {

  private numToBranch = {
    1: 'grumets',
    2: 'ullsoberts',
    3: 'maoberta',
    4: 'corobert',
    5: 'corobert2',
    6: 'joves',
  };

  transform(value: number, ...args: any[]): any {
    return this.numToBranch[value];
  }

}
