import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoflightComponent } from './noflight.component';

describe('NoflightComponent', () => {
  let component: NoflightComponent;
  let fixture: ComponentFixture<NoflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoflightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
