import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeSwitchComponent } from './ae-switch.component';

describe('AeSwitchComponent', () => {
  let component: AeSwitchComponent;
  let fixture: ComponentFixture<AeSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
