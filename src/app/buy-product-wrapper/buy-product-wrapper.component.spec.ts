import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductWrapperComponent } from './buy-product-wrapper.component';

describe('BuyProductWrapperComponent', () => {
  let component: BuyProductWrapperComponent;
  let fixture: ComponentFixture<BuyProductWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyProductWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyProductWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
