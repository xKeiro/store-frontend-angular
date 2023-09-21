import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPriceTableComponent } from "../product-price-table/product-price-table.component";

@Component({
    selector: 'app-price-list-page',
    standalone: true,
    templateUrl: './price-list-page.component.html',
    styleUrls: ['./price-list-page.component.css'],
    imports: [CommonModule, ProductPriceTableComponent]
})
export class PriceListPageComponent {

}
