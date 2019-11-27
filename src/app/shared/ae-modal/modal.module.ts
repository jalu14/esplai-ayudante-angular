import { CommonModule }               from '@angular/common';
import { NgModule }                   from '@angular/core';
import { RouterModule }               from '@angular/router';
import { CustomModalComponent }       from './modals/custom-modal/custom-modal.component';
import { FullWidthFooterComponent }   from './partials/footers/full-width-footer/full-width-footer.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    CustomModalComponent,
    ConfirmationModalComponent,
    FullWidthFooterComponent
  ],
  entryComponents: [
    CustomModalComponent,
    ConfirmationModalComponent,
  ],
})
export class ModalModule {
}
