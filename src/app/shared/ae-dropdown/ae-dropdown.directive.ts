import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ae-dropdown]',
})
export class AeDropdownDirective implements OnInit {
  @Input() public placement: string = 'bottom';
  @Input() public delay: string = '0';

  private button: HTMLElement;
  private content: HTMLElement;
  private mouseOnDropdown = false;

  constructor(private el: ElementRef) {
  }

  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    const buttonClicked = this.button.isEqualNode(targetElement);
    buttonClicked ? this.show() : this.hide();
  }

  @HostListener('window:scroll') onScroll() {
    this.mouseOnDropdown = false;
    if (this.content) {
      this.hide();
    }
  }

  public ngOnInit() {
    this.el.nativeElement.classList.add('dropdown');
    this.button = this.el.nativeElement.children[0];
    this.content = this.el.nativeElement.children[1];
    this.hide();
  }

  private show() {
    this.content.hidden = false;
  }

  private hide() {
    this.content.hidden = true;
  }
}
