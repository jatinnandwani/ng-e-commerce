import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SproductSearchComponent } from './sproduct-search.component';

describe('SproductSearchComponent', () => {
  let component: SproductSearchComponent;
  let fixture: ComponentFixture<SproductSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SproductSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SproductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
