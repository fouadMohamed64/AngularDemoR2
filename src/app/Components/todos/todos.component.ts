import { Component, OnInit } from '@angular/core';
import { IntegrationService } from './../../Services/integration.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {

  todos!:any[]

  constructor(private integrationService:IntegrationService){}

  ngOnInit() {
    this.integrationService.getAll('todos').subscribe((todos:any)=>{
      this.todos = todos;
      console.log(todos);
    })
  }



}
