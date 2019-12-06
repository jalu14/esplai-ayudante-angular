import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ae-button',
  templateUrl: './ae-button.component.html',
  styleUrls: ['./ae-button.component.scss']
})
export class AeButtonComponent implements OnInit {

  @Input() public label: string;
  @Input() public disabled: boolean = false;
  @Input() public type: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

  constructor() { }

  ngOnInit() {
  }

}
