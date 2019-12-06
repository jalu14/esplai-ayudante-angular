import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { RouterModule }                     from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule }                  from 'angularx-flatpickr';

import { AeNavBarComponent }     from './components/ae-navbar/ae-nav-bar.component';
import { AeUserNavbarComponent } from './components/ae-user-navbar/ae-user-navbar.component';
import { AeButtonComponent }     from './components/ae-button/ae-button.component';
import { AeModalComponent }      from './ae-modal/ae-modal.component';
import { AeInputComponent }      from './components/ae-input/ae-input.component';
import { AeDatepickerComponent } from './components/ae-datepicker/ae-datepicker.component';
import { TranslateModule }       from '@ngx-translate/core';
import { AeSwitchComponent }     from './components/ae-switch/ae-switch.component';
import { AeTextAreaComponent }   from './components/ae-text-area/ae-text-area.component';
import { AeTooltipDirective }    from './components/ae-tooltip/ae-tooltip.directive';
import { NgSelectModule }        from '@ng-select/ng-select';
import { AeSelectComponent }     from './components/ae-select/ae-select.component';
import { AeDropdownDirective }   from './components/ae-dropdown/ae-dropdown.directive';
import { PipesModule }           from './pipes/pipes.module';
import { ModalModule }           from './ae-modal/modal.module';

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
