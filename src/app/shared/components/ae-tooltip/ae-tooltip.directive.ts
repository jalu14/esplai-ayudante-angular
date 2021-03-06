import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NavigationStart, Router }                               from '@angular/router';

@Directive({
  selector: '[ae-tooltip]',
})
export class AeTooltipDirective {

  @Input('ae-tooltip') public tooltipTitle: string;
  @Input() public placement: string = 'top';
  @Input() public delay: string = '150';
  private tooltip: HTMLElement;
  private mouseOnTooltip = false;
  // 호스트 요소와 tooltip 요소 간의 거리
  private offset = 10;

  constructor(private el: ElementRef,
              private router: Router,
              private renderer: Renderer2) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) this.hide(true);
    });
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.mouseOnTooltip = true;
    if (!this.tooltip) {
      this.show();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.mouseOnTooltip = false;
    if (this.tooltip) {
      this.hide();
    }
  }

  @HostListener('window:scroll') onScroll() {
    this.mouseOnTooltip = false;
    if (this.tooltip) {
      this.hide();
    }
  }

  private show() {
    this.create();
    this.setPosition();
    this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
  }

  private hide(force: boolean = false) {
    if (!this.tooltip) return;
    setTimeout(() => {
      if (this.mouseOnTooltip && !force) return;
      this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
      window.setTimeout(() => {
        this.renderer.removeChild(document.body, this.tooltip);
        this.tooltip = null;
      }, +this.delay);
    }, 50)

  }

  private create() {
    this.tooltip = this.renderer.createElement('span');
    this.tooltip.onmouseenter = () => {
      this.mouseOnTooltip = true;
    };
    this.tooltip.onmouseleave = () => {
      this.mouseOnTooltip = false;
      this.hide();
    };

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipTitle), // textNode
    );

    this.renderer.appendChild(document.body, this.tooltip);
    // this.renderer.appendChild(this.el.nativeElement, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.placement}`);

    // delay 설정
    this.renderer.setStyle(this.tooltip, '-webkit-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-moz-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, '-o-transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'transition', `opacity ${this.delay}ms`);
    this.renderer.setStyle(this.tooltip, 'word-break', `break-all`);
  }

  private setPosition() {
    // 호스트 요소의 사이즈와 위치 정보
    const hostPos = this.el.nativeElement.getBoundingClientRect();

    // tooltip 요소의 사이즈와 위치 정보
    const tooltipPos = this.tooltip.getBoundingClientRect();

    // window의 scroll top
    // getBoundingClientRect 메소드는 viewport에서의 상대적인 위치를 반환한다.
    // 스크롤이 발생한 경우, tooltip 요소의 top에 세로 스크롤 좌표값을 반영하여야 한다.
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    let top, left;

    if (this.placement === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2 + this.offset;
    }

    if (this.placement === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2 + this.offset;
    }

    if (this.placement === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset / 2;
    }

    if (this.placement === 'right') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset + this.offset;
    }

    if (left < 10) {
      this.placement = 'right';
      this.setPosition();
      return;
    }

    if (top < 10) {
      this.placement = 'bottom';
      this.setPosition();
      return;
    }

    // 스크롤이 발생한 경우, tooltip 요소의 top에 세로 스크롤 좌표값을 반영하여야 한다.
    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }
}
