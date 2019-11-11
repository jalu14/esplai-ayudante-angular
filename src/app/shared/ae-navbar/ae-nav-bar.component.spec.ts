import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeNavBarComponent } from './ae-nav-bar.component';

describe('AeNavBarComponent', () => {
  let component: AeNavBarComponent;
  let fixture: ComponentFixture<AeNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
