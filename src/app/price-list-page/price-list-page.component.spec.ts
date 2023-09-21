import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceListPageComponent } from './price-list-page.component';

describe('PriceListPageComponent', () => {
  let component: PriceListPageComponent;
  let fixture: ComponentFixture<PriceListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PriceListPageComponent]
    });
    fixture = TestBed.createComponent(PriceListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
