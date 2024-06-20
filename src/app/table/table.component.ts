import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor, CommonModule } from '@angular/common';
import { ProductFilterPipe } from '../pipes/searchfilter.pipe';
import { ErrorDirectiveDirective } from '../directives/error-directive.directive';

interface Product {
  title: string;
  category: string;
  price: number;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, NgFor, HttpClientModule, CommonModule, ProductFilterPipe, ErrorDirectiveDirective], // Add ProductFilterPipe here
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<{ products: Product[] }>('https://dummyjson.com/products')
      .subscribe(response => {
        this.products = response.products;
      });
  }
}
