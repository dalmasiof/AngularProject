import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCLientComponent } from './item-client.component';

describe('ItemCLientComponent', () => {
  let component: ItemCLientComponent;
  let fixture: ComponentFixture<ItemCLientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCLientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCLientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
