import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChocolateComponent } from './add-chocolate.component';

describe('AddChocolateComponent', () => {
  let component: AddChocolateComponent;
  let fixture: ComponentFixture<AddChocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChocolateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
