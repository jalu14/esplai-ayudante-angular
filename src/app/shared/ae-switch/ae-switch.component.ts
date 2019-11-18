import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ae-switch',
  templateUrl: './ae-switch.component.html',
  styleUrls: ['./ae-switch.component.scss'],
})
export class AeSwitchComponent implements OnInit {

  @Input() public model: any;
  @Input() public key: string;
  @Input() public label: string;

  @Input() public inline: boolean = false;

  @Input() public disabled: boolean = false;

  @Output() public valueChanged = new EventEmitter();

  public innerValue: any;

  constructor() {
  }

  public ngOnInit() {
    this.innerValue = this.model[this.key] || null;
  }

  public changeValue() {
    if (this.disabled) return;
    this.model[this.key] = !this.model[this.key];
    this.innerValue = this.model[this.key];
    this.valueChanged.emit(this.innerValue);
  }

}
