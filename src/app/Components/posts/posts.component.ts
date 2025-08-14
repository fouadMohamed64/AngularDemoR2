import { Component, OnInit } from '@angular/core';
import { IntegrationService } from './../../Services/integration.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts!:any[]
  constructor(private integrationService:IntegrationService){}


  ngOnInit(){
    this.integrationService.getAll('posts').subscribe((data: any)=>{
      this.posts = data;
      console.log(data);
    })
  }


}
