import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredinatsPreferanceComponent } from './ingredinats-preferance.component';

describe('IngredinatsPreferanceComponent', () => {
  let component: IngredinatsPreferanceComponent;
  let fixture: ComponentFixture<IngredinatsPreferanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredinatsPreferanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredinatsPreferanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
