import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceTableComponent } from './product-price-table.component';

describe('ProductPriceTableComponent', () => {
  let component: ProductPriceTableComponent;
  let fixture: ComponentFixture<ProductPriceTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductPriceTableComponent]
    });
    fixture = TestBed.createComponent(ProductPriceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
