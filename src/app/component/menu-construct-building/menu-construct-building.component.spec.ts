import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuConstructBuildingComponent } from './menu-construct-building.component';

describe('MenuConstructBuildingComponent', () => {
  let component: MenuConstructBuildingComponent;
  let fixture: ComponentFixture<MenuConstructBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuConstructBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuConstructBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
