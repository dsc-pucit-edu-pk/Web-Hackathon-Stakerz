import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { AppService } from '../Service/app.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service:AppService){}
  singup(data:any){
    this.service.signup(data);
 }
}
