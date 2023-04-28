import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountedChocolatesComponent } from './discounted-chocolates.component';

describe('DiscountedChocolatesComponent', () => {
  let component: DiscountedChocolatesComponent;
  let fixture: ComponentFixture<DiscountedChocolatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountedChocolatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountedChocolatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
