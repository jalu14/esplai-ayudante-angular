import { Component }        from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'ae-component',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService,
              private router: Router) {
    translate.setDefaultLang('en');
    moment.locale('en');
    translate.use('en');
  }
}
