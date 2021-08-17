import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomDireciveComponent } from './cutom-direcive.component';

describe('CutomDireciveComponent', () => {
  let component: CutomDireciveComponent;
  let fixture: ComponentFixture<CutomDireciveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomDireciveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomDireciveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
