import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCitySelectionComponent } from './header-city-selection.component';

describe('HeaderCitySelectionComponent', () => {
  let component: HeaderCitySelectionComponent;
  let fixture: ComponentFixture<HeaderCitySelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCitySelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCitySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
