import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MmainLifeCicleChildComponent } from './mmain-life-cicle-child.component';

describe('MmainLifeCicleChildComponent', () => {
  let component: MmainLifeCicleChildComponent;
  let fixture: ComponentFixture<MmainLifeCicleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MmainLifeCicleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MmainLifeCicleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
