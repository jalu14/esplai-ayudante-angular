import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators }                        from '@angular/forms';

@Component({
  selector: 'ae-input',
  templateUrl: './ae-input.component.html',
  styleUrls: ['./ae-input.component.scss']
})
export class AeInputComponent implements OnInit {

  @Input() public model: any;
  @Input() public key: string;
  @Input() public label: string;
  @Input() public placeholder: string = '';
  @Input() public type: 'text' | 'number' | 'email' = 'text';

  @Input() public required: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public maxLength: number;
  @Input() public minLength: number;

  @Output() public validCheck = new EventEmitter<boolean>();

  public Object = Object;

  public innerValue: any;
  public innerControl: FormControl;

  public ngOnInit() {
    this.innerValue = this.model[this.key] || null;
    this.setupFormControl();
  }

  public setValue(value) {
    this.model[this.key] = value;
  }

  private setupFormControl() {
    this.innerControl = this.innerControl ? this.innerControl : new FormControl();
    let validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.maxLength) {
      validators.push(Validators.maxLength(+this.maxLength));
    }
    if (this.minLength) {
      validators.push(Validators.minLength(+this.minLength));
    }
    this.innerControl.setValidators(validators);
  }

}
