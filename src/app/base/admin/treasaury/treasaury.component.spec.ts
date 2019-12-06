import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasauryComponent } from './treasaury.component';

describe('TreasauryComponent', () => {
  let component: TreasauryComponent;
  let fixture: ComponentFixture<TreasauryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreasauryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasauryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
