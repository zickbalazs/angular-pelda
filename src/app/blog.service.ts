import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import type { Blog } from '../interfaces/blog';
interface DbResponse{
  inserts?:number;
  affectedRows?:number;
  deletedRows?:number;
  message?:string;
}
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url = 'http://localhost/2-14-SZFT/backend/php/api/api.php';
  constructor(private http:HttpClient) {
  }
  getBlogs():Observable<Blog[]>{
    return this.http.get(this.url, {
      params: {
        'table':'blogs'
      }
    }) as Observable<Blog[]>;
  }
  updateBlog(id:number, data:any):Observable<DbResponse>{
    return this.http.patch(this.url, {
      table:'blogs',
      field:'ID',
      value:id,
      data: data
    })
  }
  deleteBlog(id:number):Observable<DbResponse>{
    return this.http.delete(this.url, {
      body:{
        table:'blogs',
        field:'ID',
        value:id
      }
    })
  }
  postBlog(data:Blog){
    return this.http.post(this.url, {
      body:{
        table:'blogs',
        data:data
      }
    })
  }
}
