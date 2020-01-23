import { CommonModule }    from '@angular/common';
import { FormsModule }     from '@angular/forms';
import { NgModule }        from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MembersRouting }  from './main.routing';
import { MainComponent }   from './main/main.component';
import { SharedModule }    from '../../shared/shared.module';
import { PipesModule }     from '../../shared/pipes/pipes.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MembersRouting,
    TranslateModule,
    PipesModule
  ],
  declarations: [
    MainComponent,
  ],
})
export class MainModule {
}
