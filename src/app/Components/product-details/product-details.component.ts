import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { IProduct } from '../../Modles/iproduct';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product: IProduct | null = null;
  IDS!: number[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    // this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
      this.product = this.productService.getProductById(this.productId);
    })

    // this.product = this.productService.getProductById(this.productId)

  }

  goBack() {
    this.location.back();
  }

  goPrev() {
    this.IDS = this.productService.productsIDS();
    let index = this.IDS.indexOf(this.productId);
    this.router.navigateByUrl(`/productDetails/${this.IDS[--index]}`)
  }


  goNext() {
    this.IDS = this.productService.productsIDS();
    let index = this.IDS.indexOf(this.productId);
    this.router.navigateByUrl(`/productDetails/${this.IDS[++index]}`)
  }



}
