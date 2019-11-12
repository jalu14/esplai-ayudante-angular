import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AeNavBarComponent} from './ae-navbar/ae-nav-bar.component';
import {RouterModule} from '@angular/router';
import { AeUserNavbarComponent } from './ae-user-navbar/ae-user-navbar.component';
import { AeButtonComponent } from './ae-button/ae-button.component';
import { AeModalComponent } from './ae-modal/ae-modal.component';
import { CustomModalComponent } from './ae-modal/partials/custom-modal/custom-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    AeNavBarComponent,
    AeUserNavbarComponent,
    AeButtonComponent,
    AeModalComponent,
    CustomModalComponent
  ],
  exports: [
    AeNavBarComponent,
    AeButtonComponent,
    AeModalComponent
  ],
  entryComponents: [
    CustomModalComponent
  ]
})
export class SharedModule {
}
