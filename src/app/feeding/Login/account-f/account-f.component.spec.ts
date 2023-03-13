import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFComponent } from './account-f.component';

describe('AccountFComponent', () => {
  let component: AccountFComponent;
  let fixture: ComponentFixture<AccountFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
