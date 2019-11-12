import {CommonModule}         from '@angular/common';
import {FormsModule}          from '@angular/forms';
import {NgModule}             from '@angular/core';
import {EventsRouting}        from './events.routing';
import { MainComponent }      from './main/main.component';
import {SharedModule}         from '../../shared/shared.module';
import { CreateEventModal }   from './modals/create-event/create-event.modal';
import { ModalFactoryModule } from '../../services/modal/modal.factory.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ModalFactoryModule.forRoot(),

    EventsRouting,
    SharedModule,
  ],
  declarations: [
    MainComponent,
    CreateEventModal
  ],
  entryComponents: [
    CreateEventModal
  ]
})
export class EventsModule {
}
