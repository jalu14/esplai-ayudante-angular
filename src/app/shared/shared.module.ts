import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule }                  from 'angularx-flatpickr';

import { AeNavBarComponent }        from './ae-navbar/ae-nav-bar.component';
import { AeUserNavbarComponent }    from './ae-user-navbar/ae-user-navbar.component';
import { AeButtonComponent }        from './ae-button/ae-button.component';
import { AeModalComponent }         from './ae-modal/ae-modal.component';
import { CustomModalComponent }     from './ae-modal/modals/custom-modal/custom-modal.component';
import { AeInputComponent }         from './ae-input/ae-input.component';
import { FullWidthFooterComponent } from './ae-modal/partials/footers/full-width-footer/full-width-footer.component';
import { AeDatepickerComponent }    from './ae-datepicker/ae-datepicker.component';
import { TranslateModule }          from '@ngx-translate/core';
import { AeSwitchComponent }        from './ae-switch/ae-switch.component';
import { AeTextAreaComponent }      from './ae-text-area/ae-text-area.component';
import { AeTooltipDirective }       from './ae-tooltip/ae-tooltip.directive';
import { NgSelectModule }           from '@ng-select/ng-select';
import { AeSelectComponent }        from './ae-select/ae-select.component';
import { AeDropdownDirective }      from './ae-dropdown/ae-dropdown.directive';
import { PipesModule }              from './pipes/pipes.module';
import { ModalModule }              from './ae-modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    NgSelectModule,
    FlatpickrModule.forRoot(),
    TranslateModule,

    ModalModule,
    PipesModule
  ],
  declarations: [
    AeNavBarComponent,
    AeUserNavbarComponent,
    AeButtonComponent,
    AeModalComponent,
    AeInputComponent,
    AeDatepickerComponent,
    AeSwitchComponent,
    AeTextAreaComponent,
    AeTooltipDirective,
    AeDropdownDirective,
    AeSelectComponent,
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
    AeDropdownDirective,
    AeSelectComponent,
  ],
})
export class SharedModule {
}
