import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewWithUserInfoComponent } from './review-with-user-info.component';

describe('ReviewWithUserInfoComponent', () => {
  let component: ReviewWithUserInfoComponent;
  let fixture: ComponentFixture<ReviewWithUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewWithUserInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewWithUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
