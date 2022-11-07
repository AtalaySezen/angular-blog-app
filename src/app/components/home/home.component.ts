import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogData:Array<any>=[];
  pageSize = 8;
  page=13;

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((res)=>{
      console.log(res);
      this.blogData = res; //BlogData array`e res eşitlendi.
    })
  }

}
