import { Component } from '@angular/core';
import { IProduct } from '../../Modles/iproduct';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  product:IProduct = {} as IProduct;

  constructor(private router:Router){}

  onSubmit(myForm:NgForm){
    //? intgrate with api and send data
    myForm.resetForm();
    this.router.navigate(['/home'])
  }

}
