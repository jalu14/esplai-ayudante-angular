import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  public innerValue;
  public isValid: boolean = true;
  public okMaxLength: boolean = true;
  public okMinLength: boolean = true;

  public ngOnInit() {
    this.innerValue = this.model[this.key] || null;
  }

  public setValue(value) {
    this.model[this.key] = value;
    this.checkValid(value);
  }

  public checkValid(value) {
    this.isValid = true;
    this.okMaxLength = true;
    this.okMinLength = true;
    if (this.required && !value) this.isValid = false;
    if (this.maxLength) {
      this.isValid = value.length <= this.maxLength;
      this.okMaxLength = false;
    }
    if (this.minLength) {
      this.isValid = value.length <= this.minLength;
      this.okMinLength = false;
    }
    this.validCheck.emit(this.isValid);
  }

}
