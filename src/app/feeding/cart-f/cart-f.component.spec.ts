import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFComponent } from './cart-f.component';

describe('CartFComponent', () => {
  let component: CartFComponent;
  let fixture: ComponentFixture<CartFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
