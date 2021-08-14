import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLifeCycleComponent } from './main-life-cycle.component';

describe('MainLifeCycleComponent', () => {
  let component: MainLifeCycleComponent;
  let fixture: ComponentFixture<MainLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLifeCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
