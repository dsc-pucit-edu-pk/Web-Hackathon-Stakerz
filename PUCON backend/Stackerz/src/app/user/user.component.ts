import { Component } from '@angular/core';
import { AppService } from '../Service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
constructor(private service:AppService,
  private route:Router,
  ){}
  userJoin(data:any){
    this.service.Userpage(data);
    this.route.navigate(['/home'])
  }
}
