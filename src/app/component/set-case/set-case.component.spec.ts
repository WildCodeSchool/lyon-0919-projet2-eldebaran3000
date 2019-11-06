import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCaseComponent } from './set-case.component';

describe('SetCaseComponent', () => {
  let component: SetCaseComponent;
  let fixture: ComponentFixture<SetCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
