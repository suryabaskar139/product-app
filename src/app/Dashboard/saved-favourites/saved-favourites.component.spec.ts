import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFavouritesComponent } from './saved-favourites.component';

describe('SavedFavouritesComponent', () => {
  let component: SavedFavouritesComponent;
  let fixture: ComponentFixture<SavedFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedFavouritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
