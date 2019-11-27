import { Component, Input, OnInit } from '@angular/core';
import { Spanish }                  from 'flatpickr/dist/l10n/es.js'
import { Catalan }                  from 'flatpickr/dist/l10n/cat.js'
import { TranslateService }         from '@ngx-translate/core';
import { FormControl, Validators }  from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'ae-datepicker',
  templateUrl: './ae-datepicker.component.html',
  styleUrls: ['./ae-datepicker.component.scss']
})
export class AeDatepickerComponent implements OnInit {
  @Input() public model: any;
  @Input() public key: string;
  @Input() public label: string;

  @Input() public type: 'single' | 'multiple' | 'range' = 'single';
  @Input() public minDate: string;

  @Input() public required: boolean = false;
  @Input() public disabled: boolean = false;

  public Object = Object;

  public innerValue: any;
  public innerControl: FormControl;
  public selectedLocale: any = 'default';

  public dateFormat = {
    es: 'd M Y',
    cat: 'd M Y',
    default: 'd M Y'
  };

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(val => this.changeLocale(val.lang));
  }

  public ngOnInit() {
    this.innerValue = this.model[this.key] || null;
    this.selectedLocale = this.translate.currentLang;
    this.setupFormControl();
  }

  public setValue(value) {
    this.model[this.key] = value.dateString;
  }

  private changeLocale(locale: string | 'es' | 'cat' | 'default') {
    switch (locale) {
      case 'cat':
        this.selectedLocale = Catalan;
        moment.locale('cat');
        break;

      case 'es':
        this.selectedLocale = Spanish;
        moment.locale('es');
        break;

      case 'default':
      default:
        this.selectedLocale = 'default';
        moment.locale('en');
        break;
    }
  }

  private setupFormControl() {
    this.innerControl = this.innerControl ? this.innerControl : new FormControl();
    let validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    this.innerControl.setValidators(validators);
  }
}
