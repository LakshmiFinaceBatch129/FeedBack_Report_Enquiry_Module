import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryofcustomerComponent } from './enquiryofcustomer.component';

describe('EnquiryofcustomerComponent', () => {
  let component: EnquiryofcustomerComponent;
  let fixture: ComponentFixture<EnquiryofcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryofcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryofcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
