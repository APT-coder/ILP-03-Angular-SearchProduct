import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/Product.interface'; // Ensure this path is correct

@Pipe({
  name: 'productFilter',
  standalone: true
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): Product[] {
    if (!products || !searchTerm) {
      return products;
    }

    return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

}
