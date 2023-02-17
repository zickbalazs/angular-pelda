import { Component } from '@angular/core';
import type { Blog } from 'src/interfaces/blog';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs:Blog[] = [];
  constructor(service: BlogService){
    service.getBlogs().subscribe(data=>{this.blogs=data;});
  }
  delet(event:any){
    this.blogs.splice(this.blogs.findIndex(e=>e.ID==event),1);
  }
}
