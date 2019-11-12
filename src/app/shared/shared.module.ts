import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AeNavBarComponent} from './ae-navbar/ae-nav-bar.component';
import {RouterModule} from '@angular/router';
import { AeUserNavbarComponent } from './ae-user-navbar/ae-user-navbar.component';
import { AeButtonComponent } from './ae-button/ae-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AeNavBarComponent,
    AeUserNavbarComponent,
    AeButtonComponent
  ],
  exports: [
    AeNavBarComponent,
    AeButtonComponent
  ],
  entryComponents: []
})
export class SharedModule {
}
