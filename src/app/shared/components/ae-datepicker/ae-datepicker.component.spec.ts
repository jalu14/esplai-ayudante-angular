import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeDatepickerComponent } from './ae-datepicker.component';

describe('AeDatepickerComponent', () => {
  let component: AeDatepickerComponent;
  let fixture: ComponentFixture<AeDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
