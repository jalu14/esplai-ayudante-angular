import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ae-dropdown]',
})
export class AeDropdownDirective implements OnInit {
  @Input() public placement: string = 'bottom';

  private button: HTMLElement;
  private content: HTMLElement;

  constructor(private el: ElementRef) {
  }

  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement) {
    const buttonClicked = this.button.isEqualNode(targetElement) || this.button.contains(targetElement);
    buttonClicked ? this.show() : this.hide();
  }

  @HostListener('window:scroll') onScroll() {
    this.hide();
  }

  public ngOnInit() {
    this.el.nativeElement.classList.add('dropdown');
    this.button = this.el.nativeElement.children[0];
    this.content = this.el.nativeElement.children[1];
    this.content.style['top'] = this.button.offsetHeight + 5 + 'px';
    this.hide();
  }

  private show() {
    this.content.hidden = false;
  }

  private hide() {
    this.content.hidden = true;
  }
}
