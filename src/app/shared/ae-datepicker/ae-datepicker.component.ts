import { Component, Input, OnInit } from '@angular/core';
import { Spanish }                  from 'flatpickr/dist/l10n/es.js'
import { Catalan }                  from 'flatpickr/dist/l10n/cat.js'
import { TranslateService }         from '@ngx-translate/core';

@Component({
  selector: 'ae-datepicker',
  templateUrl: './ae-datepicker.component.html',
  styleUrls: ['./ae-datepicker.component.scss']
})
export class AeDatepickerComponent implements OnInit {
  @Input() public model: any;
  @Input() public key: string;
  @Input() public label: string;

  @Input() public required: boolean = false;
  @Input() public disabled: boolean = false;

  public innerValue: any;
  public selectedLocale: any = 'default';

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(val => this.changeLocale(val.lang));
  }

  ngOnInit() {
    this.innerValue = this.model[this.key] || null;
    this.selectedLocale = this.translate.currentLang;
  }

  public setValue(value) {
    this.model[this.key] = value;
  }

  private changeLocale(locale: string | 'es' | 'cat' | 'default') {
    switch (locale) {
      case 'cat':
        this.selectedLocale = Catalan;
        break;

      case 'es':
        this.selectedLocale = Spanish;
        break;

      case 'default':
      default:
        this.selectedLocale = 'default';
        break;
    }
  }

}
