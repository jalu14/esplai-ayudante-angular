import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AeNavBarComponent} from './ae-navbar/ae-nav-bar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AeNavBarComponent
  ],
  exports: [
    AeNavBarComponent
  ],
  entryComponents: []
})
export class SharedModule {
}
