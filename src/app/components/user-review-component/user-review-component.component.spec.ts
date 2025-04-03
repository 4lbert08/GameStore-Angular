import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewComponentComponent } from './user-review-component.component';

describe('UserReviewComponentComponent', () => {
  let component: UserReviewComponentComponent;
  let fixture: ComponentFixture<UserReviewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReviewComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
