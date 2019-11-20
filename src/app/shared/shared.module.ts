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
import { AeSwitchComponent }        from './ae-switch/ae-switch.component';
import { AeTextAreaComponent }      from './ae-text-area/ae-text-area.component';
import { AeTooltipDirective }       from './ae-tooltip/ae-tooltip.directive';

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
    AeDatepickerComponent,
    AeSwitchComponent,
    AeTextAreaComponent,
    AeTooltipDirective,
  ],
  exports: [
    AeNavBarComponent,
    AeButtonComponent,
    AeDatepickerComponent,
    AeInputComponent,
    AeModalComponent,
    AeSwitchComponent,
    AeTextAreaComponent,
    AeTooltipDirective,
  ],
  entryComponents: [
    CustomModalComponent,
  ],
})
export class SharedModule {
}
