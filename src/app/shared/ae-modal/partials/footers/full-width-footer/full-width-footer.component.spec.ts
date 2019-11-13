import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthFooterComponent } from './full-width-footer.component';

describe('FullWidthFooterComponent', () => {
  let component: FullWidthFooterComponent;
  let fixture: ComponentFixture<FullWidthFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidthFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
