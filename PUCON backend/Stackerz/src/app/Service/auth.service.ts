import { Injectable } from "@angular/core";
import { AppService } from "./app.service";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
// import { ToastrService } from "ngx-toastr";


@Injectable({ providedIn: 'root' })
export class AuthService {
  activeStatus: boolean=true
  currentUser: any;
  constructor(
    private appservice: AppService,
  ) { }

  async getAllowed(role: string): Promise<boolean> {
   
    this.activeStatus = false;
   
    var check = this.getStatus();
    if (check) {
      this.currentUser = localStorage.getItem('current_user')
      console.log(this.currentUser)

      if (this.currentUser.role == role) {
        this.activeStatus = true;
      }
    }

    return this.activeStatus
  }

  getStatus(): boolean {
    var Status = true;
    var value = sessionStorage.getItem('Id');
    if (value == '' || value == null) {
      Status = false;
    }
    return Status;
  }
}