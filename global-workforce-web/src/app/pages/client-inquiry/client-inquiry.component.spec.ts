import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInquiryComponent } from './client-inquiry.component';

describe('ClientInquiryComponent', () => {
  let component: ClientInquiryComponent;
  let fixture: ComponentFixture<ClientInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientInquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
