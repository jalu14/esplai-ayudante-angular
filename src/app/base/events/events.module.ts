import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { NgModule }           from '@angular/core';
import { eventRoutes }        from './events.routing';
import { MainComponent }      from './main/main.component';
import { SharedModule }       from '../../shared/shared.module';
import { CreateEventModal }   from './modals/create-event.modal';
import { ModalFactoryModule } from '../../services/modal/modal.factory.module';
import { DetailComponent }    from './detail/detail.component';
import { RouterModule }       from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(eventRoutes),
    ModalFactoryModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    MainComponent,
    CreateEventModal,
    DetailComponent,
  ],
  entryComponents: [
    CreateEventModal,
  ],
})
export class EventsModule {
}
