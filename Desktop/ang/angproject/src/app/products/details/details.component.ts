import { Component, OnInit } from '@angular/core';

import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor ( private _activatedrouter :ActivatedRoute, private _router:Router) { }

  ngOnInit() {

    this._activatedrouter.params.subscribe((data) => {
       console.log(data);
    });
  }

  nbutton(){

    this._router.navigate(['/products']);
  }

}
