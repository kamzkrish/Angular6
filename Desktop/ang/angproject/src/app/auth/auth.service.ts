import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpclient:HttpClient , private _router:Router) { }



  dogin(auth_details:any)
  
  {

    this._httpclient.post('http://localhost:3000/autenticate', auth_details).subscribe((data:any) =>{

        if(data.isLoggedIn){

          this._router.navigate(['/home']);
        }
        else

        {
              alert('Invalid Credentials !!!!');
        }
    });

  }
}
