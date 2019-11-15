import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule }                  from 'angularx-flatpickr';

import { AeNavBarComponent }        from './ae-navbar/ae-nav-bar.component';
import { AeUserNavbarComponent }    from './ae-user-navbar/ae-user-navbar.component';
import { AeButtonComponent }        from './ae-button/ae-button.component';
import { AeModalComponent }         from './ae-modal/ae-modal.component';
import { CustomModalComponent }     from './ae-modal/partials/custom-modal/custom-modal.component';
import { AeInputComponent }         from './ae-input/ae-input.component';
import { FullWidthFooterComponent } from './ae-modal/partials/footers/full-width-footer/full-width-footer.component';
import { AeDatepickerComponent }    from './ae-datepicker/ae-datepicker.component';
import { TranslateModule }          from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    TranslateModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AeNavBarComponent,
    AeUserNavbarComponent,
    AeButtonComponent,
    AeModalComponent,
    CustomModalComponent,
    AeInputComponent,
    FullWidthFooterComponent,
    AeDatepickerComponent
  ],
  exports: [
    AeNavBarComponent,
    AeButtonComponent,
    AeDatepickerComponent,
    AeInputComponent,
    AeModalComponent
  ],
  entryComponents: [
    CustomModalComponent
  ]
})
export class SharedModule {
}
