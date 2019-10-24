import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlerComponent } from './controler.component';

describe('ControlerComponent', () => {
  let component: ControlerComponent;
  let fixture: ComponentFixture<ControlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
