import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStudentsComponent } from './registration-students.component';

describe('RegistrationStudentsComponent', () => {
  let component: RegistrationStudentsComponent;
  let fixture: ComponentFixture<RegistrationStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationStudentsComponent]
    });
    fixture = TestBed.createComponent(RegistrationStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
