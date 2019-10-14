import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageBannnerComponent } from './home-page-bannner.component';

describe('HomePageBannnerComponent', () => {
  let component: HomePageBannnerComponent;
  let fixture: ComponentFixture<HomePageBannnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageBannnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageBannnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
