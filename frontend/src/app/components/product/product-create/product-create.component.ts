import { Product } from './product.model';
import { NavComponent } from './../../template/nav/nav.component';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private ProductService: ProductService,
    private router: Router) { }

    product : Product = {
      name: ''
    }

  ngOnInit(): void {
  }
 
  createProduct(): void {
    this.ProductService.create(this.product).subscribe(() =>{
      this.ProductService.showMessage('Produto criado')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
