import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() stars:number = 0;
  numSequence(n:number):Array<number>{
    return Array(n);
  }
}
