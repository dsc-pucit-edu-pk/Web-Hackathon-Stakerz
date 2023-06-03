import { Component } from '@angular/core';
import { AppService } from '../Service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private serivice:AppService){}

  singin(data:any){
    this.serivice.signin(data)
  }
}
