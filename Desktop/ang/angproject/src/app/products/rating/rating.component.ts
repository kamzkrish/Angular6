import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

@Input() rating: number;

@Output() ratingtoparent: EventEmitter<string> = new EventEmitter();



rating_arr:any = [];

  constructor() { }

  ngOnInit() {

   // console.log(this.rating);
     this.rating_arr = Array(Math.round(this.rating)).fill(Math.round(this.rating));

  }

  sendratingtoparent(){
    this.ratingtoparent.emit("Rating Value" +this.rating);
  }
}
