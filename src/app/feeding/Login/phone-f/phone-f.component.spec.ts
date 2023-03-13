import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFComponent } from './phone-f.component';

describe('PhoneFComponent', () => {
  let component: PhoneFComponent;
  let fixture: ComponentFixture<PhoneFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
