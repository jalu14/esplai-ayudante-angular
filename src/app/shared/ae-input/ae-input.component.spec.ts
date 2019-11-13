import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeInputComponent } from './ae-input.component';

describe('AeInputComponent', () => {
  let component: AeInputComponent;
  let fixture: ComponentFixture<AeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
