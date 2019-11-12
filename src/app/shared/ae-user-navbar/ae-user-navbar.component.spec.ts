import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeUserNavbarComponent } from './ae-user-navbar.component';

describe('AeUserNavbarComponent', () => {
  let component: AeUserNavbarComponent;
  let fixture: ComponentFixture<AeUserNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeUserNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeUserNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
