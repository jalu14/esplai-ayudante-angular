import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { NgModule }           from '@angular/core';
import { MembersRouting }     from './members-routing.module';
import { MainComponent }      from './main/main.component';
import { SharedModule }       from '../../shared/shared.module';
import { DetailComponent }    from './detail/detail.component';
import { CreateMemberModal }  from './modals/create-member.modal';
import { ModalFactoryModule } from '../../services/modal/modal.factory.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MembersRouting,
    ModalFactoryModule.forRoot(),
  ],
  declarations: [
    MainComponent,
    DetailComponent,

    CreateMemberModal,
  ],
  entryComponents: [
    CreateMemberModal,
  ],
})
export class MembersModule {
}
