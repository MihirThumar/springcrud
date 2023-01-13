import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCustomerComponent } from './creat-customer.component';

describe('CreatCustomerComponent', () => {
  let component: CreatCustomerComponent;
  let fixture: ComponentFixture<CreatCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
