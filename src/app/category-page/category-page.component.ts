import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Title} from "@angular/platform-browser";
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
    selector: 'app-category-page',
    standalone: true,
    templateUrl: './category-page.component.html',
    styleUrls: ['./category-page.component.css'],
    imports: [CommonModule, ProductCardComponent]
})
export class CategoryPageComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Category Name');
  }
}
