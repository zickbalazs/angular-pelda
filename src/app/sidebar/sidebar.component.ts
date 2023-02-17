import { Component, Input } from '@angular/core';
interface link{
  caption:string;
  url:string
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() titles:link[] = [
    {
      caption:"Blogok listája",
      url:'/blogs'
    },
    {
      caption:"Adminisztráció",
      url:'/admin'
    },
    {
      caption:'Rólunk',
      url:'/about'
    },
    {
      caption:'Kapcsolat',
      url:'/contact'
    }
  ];
}
