import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSuccessfullyComponent } from './book-successfully.component';

describe('BookSuccessfullyComponent', () => {
  let component: BookSuccessfullyComponent;
  let fixture: ComponentFixture<BookSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookSuccessfullyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
