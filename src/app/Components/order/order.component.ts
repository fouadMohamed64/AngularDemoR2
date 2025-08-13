import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../Modles/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule , ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  selectedCategoryID: number = 1;
  categories: ICategory[];
  totalOrderPrice:number = 0;
  @ViewChild(ProductsComponent) pc!:ProductsComponent
  @ViewChild('inp') input!:ElementRef

  constructor() {
    this.categories = [
      { id: 1, name: 'Car' },
      { id: 2, name: 'Phone' },
      { id: 3, name: 'Laptop' },
      { id: 4, name: 'Watch' },
    ]
  }

  viewTotalPrice(tOPrice:number){
    this.totalOrderPrice = tOPrice;
  }

  ngAfterViewInit(){
    console.log(this.pc)
    console.log(this.input.nativeElement.value)
  }

}
