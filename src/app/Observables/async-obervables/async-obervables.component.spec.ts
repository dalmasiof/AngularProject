import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncObervablesComponent } from './async-obervables.component';

describe('AsyncObervablesComponent', () => {
  let component: AsyncObervablesComponent;
  let fixture: ComponentFixture<AsyncObervablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncObervablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncObervablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
