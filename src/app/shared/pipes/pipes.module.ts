import { NgModule }      from '@angular/core';
import { DateifyPipe }   from './dateify/dateify.pipe';
import { BranchifyPipe } from './branchify/branchify.pipe';

@NgModule({
  imports: [],
  declarations: [
    DateifyPipe,
    BranchifyPipe],
  exports: [
    DateifyPipe,
    BranchifyPipe
  ],
})
export class PipesModule {
}
