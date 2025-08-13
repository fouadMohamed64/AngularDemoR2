import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IProduct } from '../../Modles/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../Modles/icategory';
import { FormsModule } from '@angular/forms';
import { BorderImageDirective } from '../../Directives/border-image.directive';
import { DashPipe } from '../../Pipes/dash-pipe.pipe';
import { ProductsService } from '../../Services/products.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , FormsModule  , DashPipe , RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges , OnInit{

  // products: IProduct[];
  totalPrice: number =0;
  // categories:ICategory[];
  // selectedCategoryID: number=1;
  dateNow:Date = new Date();
  filteredProducts:IProduct[];
  // ! non null asseration operator

  @Input() receviedSelectedCategoryId:number=1;
  @Output() onTotalOrderPriceChanges:EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private productsService:ProductsService , private router:Router){
    // this.products = [
    //   {id: 1 , name: 'BMW' , quantity: 2 , price: 8000 , productImage: 'assets/Images/car.jpeg' , productCategory: 1},
    //   {id: 2 , name: 'Merceds-Benz' , quantity: 0 , price: 18000 , productImage: 'assets/Images/car.jpeg' , productCategory: 1},
    //   {id: 3 , name: 'Hawaii' , quantity: 5 , price: 4000 , productImage: 'assets/Images/phone.jpeg' , productCategory: 2},
    //   {id: 4 , name: 'Iphone' , quantity: 7 , price: 9000 , productImage: 'assets/Images/phone.jpeg' , productCategory: 2},
    //   {id: 5 , name: 'Dell' , quantity: 1 , price: 19000 , productImage: 'assets/Images/laptop.jpeg' , productCategory: 3},
    //   {id: 6 , name: 'Mac' , quantity: 3 , price: 15000 , productImage: 'assets/Images/laptop.jpeg' , productCategory: 3},
    //   {id: 7 , name: 'Casio' , quantity: 4 , price: 15000 , productImage: 'assets/Images/watch.jpeg' , productCategory: 4},
    //   {id: 8 , name: 'Rado' , quantity: 0 , price: 13000 , productImage: 'assets/Images/watch.jpeg' , productCategory: 4},
    // ];
    // this.categories = [
    //   {id: 1 , name: 'Car'},
    //   {id: 2 , name: 'Phone'},
    //   {id: 3 , name: 'Laptop'},
    //   {id: 4 , name: 'Watch'},
    // ]
    // this.filteredProducts = this.products;
    this.filteredProducts = this.productsService.getAllProducts();
  }
  ngOnInit() {
    this.filteredProducts = this.productsService.getAllProducts();
  }

  ngOnChanges() {
    // this.filterationFunction()
    this.filteredProducts = this.productsService.getProductsByCategoryId(this.receviedSelectedCategoryId);
  }


  buy(productPrice:number , inputValue:string){
    this.totalPrice += productPrice * +inputValue;
    // productPrice * parseInt(inputValue);
    // productPrice * Number(inputValue);
    this.onTotalOrderPriceChanges.emit(this.totalPrice)
  }

  // trackingFunction( i: number , product: IProduct){
  //   return i;
  // }

  // filterationFunction(){
  //   this.filteredProducts = this.products.filter((ele) => ele.productCategory == this.receviedSelectedCategoryId )
  // }


  goToDetails(id:number){
    // this.router.navigate([`/productDetails` , id])
    this.router.navigateByUrl(`/productDetails/${id}`)
    // .then(()=>console.log('navting'))
  }


}

