import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarBufferComponent } from './progress-bar-buffer.component';

describe('ProgressBarBufferComponent', () => {
  let component: ProgressBarBufferComponent;
  let fixture: ComponentFixture<ProgressBarBufferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarBufferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
