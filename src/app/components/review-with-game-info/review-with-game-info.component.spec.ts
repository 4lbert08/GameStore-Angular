import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewWithGameInfoComponent } from './review-with-game-info.component';

describe('ReviewWithGameInfoComponent', () => {
  let component: ReviewWithGameInfoComponent;
  let fixture: ComponentFixture<ReviewWithGameInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewWithGameInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewWithGameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
