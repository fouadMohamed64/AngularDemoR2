import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  userRegisterForm: FormGroup;

  constructor(private fb:FormBuilder){
  //   this.userRegisterForm = new FormGroup({
  //     name: new FormControl('' , [Validators.required]),
  //     email: new FormControl('' , [Validators.required , Validators.pattern('[a-zA-Z]{3,20}@gmail.com')]),
  //     password: new FormControl('')
  //   })

    this.userRegisterForm = this.fb.group({
      name: fb.control('' , [Validators.required]),
      email: fb.control('' , [Validators.required , Validators.pattern('[a-zA-Z]{3,20}@gmail.com')]),
      password: fb.control('')
    })

  }

  get getEmail(){
    return this.userRegisterForm.get('email')
  }

  onSubmit(){
    // hit api register function to register user
  }

}
