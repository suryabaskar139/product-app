import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberFComponent } from './number-f.component';

describe('NumberFComponent', () => {
  let component: NumberFComponent;
  let fixture: ComponentFixture<NumberFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
