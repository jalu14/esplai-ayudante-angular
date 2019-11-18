import { Component }        from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ae-component',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
