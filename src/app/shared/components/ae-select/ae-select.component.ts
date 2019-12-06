import { Component, Input, OnInit } from '@angular/core';
import { FormControl }              from '@angular/forms';

@Component({
  selector: 'ae-select',
  templateUrl: './ae-select.component.html',
  styleUrls: ['./ae-select.component.scss'],
})
export class AeSelectComponent implements OnInit {

  @Input() public model: any;
  @Input() public key: string;
  @Input() public label: string;
  @Input() public type: 'normal' | 'tag' = 'normal';
  @Input() public optionList: any[] = [];
  @Input() public setId: boolean = false;
  @Input() public multiple: boolean = false;
  @Input() public closeOnSelect: boolean = true;
  @Input() public required: boolean;

  public isLoading: boolean = false;

  public innerValue: any;
  public innerControl: FormControl;

  constructor() {
  }

  public ngOnInit() {
    this.innerValue = this.model[this.key];
  }

  public setValue() {
    const value = this.innerValue;
    if (!this.setId) {
      this.model[this.key] = value;
      return;
    }

  }

  public addTagPromise(name) {
    return new Promise((resolve) => {
      this.isLoading = true;
      // Simulate backend call.
      setTimeout(() => {
        resolve({ id: this['itemsList']._items.length + 1, name: name });
        this.isLoading = false;
      }, 1000);
    });
  }

}
