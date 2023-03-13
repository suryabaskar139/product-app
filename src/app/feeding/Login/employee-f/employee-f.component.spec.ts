import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFComponent } from './employee-f.component';

describe('EmployeeFComponent', () => {
  let component: EmployeeFComponent;
  let fixture: ComponentFixture<EmployeeFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
