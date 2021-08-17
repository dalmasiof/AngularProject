import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacTiveFormsComponent } from './reac-tive-forms.component';

describe('ReacTiveFormsComponent', () => {
  let component: ReacTiveFormsComponent;
  let fixture: ComponentFixture<ReacTiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReacTiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacTiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
