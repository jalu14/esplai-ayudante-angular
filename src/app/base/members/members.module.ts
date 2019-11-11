import {CommonModule}    from '@angular/common';
import {FormsModule}     from '@angular/forms';
import {NgModule}        from '@angular/core';
import {MembersRouting}  from './members-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,

    MembersRouting,
  ],
  declarations: [
    MainComponent
  ],
})
export class MembersModule {
}
