import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Blog } from '../../interfaces/blog';
import {BlogService} from '../blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() blogData = {} as Blog;
  @Output() delete:EventEmitter<number> = new EventEmitter();
  constructor(private service:BlogService){}
  Rate(r:number){
    this.blogData.ratings=r;
    this.service.updateBlog((this.blogData.ID as number), {ratings:r}).subscribe();
  }
  Delete(){
      this.service.deleteBlog((this.blogData.ID as number)).subscribe(res=>{ this.delete.emit((this.blogData.ID as number)); });
  }
}
