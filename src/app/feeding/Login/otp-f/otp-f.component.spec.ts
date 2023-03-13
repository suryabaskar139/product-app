import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpFComponent } from './otp-f.component';

describe('OtpFComponent', () => {
  let component: OtpFComponent;
  let fixture: ComponentFixture<OtpFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
