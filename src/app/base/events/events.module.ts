import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {EventsRouting} from './events.routing';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,

    EventsRouting,
  ],
  declarations: [
    MainComponent
  ],
})
export class EventsModule {
}
