import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'full-width-footer',
  templateUrl: './full-width-footer.component.html',
  styleUrls: ['./full-width-footer.component.scss']
})
export class FullWidthFooterComponent {

  @Input() public hideCancel: boolean = false;
  @Output() public footerAction = new EventEmitter();

  constructor() { }

  public emitAction(action: 'accept' | 'close') {
    this.footerAction.emit(action);
  }

}
