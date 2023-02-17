import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Blog } from 'src/interfaces/blog';
@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.css']
})
export class UploadModalComponent {
  title = "";
  description = "";
  data:Blog={
    title:this.description,
    description:this.title,
    date: new Date().toISOString(),
    ratings:1
  }
  Upload(){
    console.log(this.data);
  }
}
