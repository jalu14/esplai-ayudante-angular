import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { adminRoutes }        from './admin.routing';
import { SharedModule }       from '../../shared/shared.module';
import { ModalFactoryModule } from '../../services/modal/modal.factory.module';
import { TreasauryComponent } from './treasaury/treasaury.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { MainComponent }      from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    ModalFactoryModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    TreasauryComponent,
    SecretaryComponent,
    MainComponent
  ],
})
export class AdminModule {
}
