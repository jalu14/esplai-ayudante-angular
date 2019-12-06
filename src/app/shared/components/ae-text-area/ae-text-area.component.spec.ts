import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeTextAreaComponent } from './ae-text-area.component';

describe('AeInputComponent', () => {
  let component: AeTextAreaComponent;
  let fixture: ComponentFixture<AeTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
