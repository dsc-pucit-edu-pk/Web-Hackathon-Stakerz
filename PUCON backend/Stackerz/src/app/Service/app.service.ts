import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as GLOBAL from '../global';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(public http: HttpClient,
    private route:Router,
    ) { }
  

  CreatEvent( obj:any ){

    const headers = new HttpHeaders();
  

    return this.http.post(GLOBAL.serviceUrl + '/service/createEvent',obj , { headers: headers });
  }


  GetEvent(){

    const headers = new HttpHeaders();
    return this.http.post(GLOBAL.serviceUrl + '/service/fetchevents' , { headers: headers });
  }
  


  DeleteEvents(_id=""){

    const headers = new HttpHeaders();
    return this.http.post(GLOBAL.serviceUrl + '/service/deletevents/' +_id , { headers: headers });
  }
  // eventsupdate


  updateEvents(obj:any){

    const headers = new HttpHeaders();
    return this.http.post(GLOBAL.serviceUrl + '/service/eventsupdate' ,  obj , { headers: headers });
  }
  Search(search=""){

    const headers = new HttpHeaders();
    return this.http.post(GLOBAL.serviceUrl + '/service/search/' + search , { headers: headers });
  }


  signup(data:any){

    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/service/api/signup',data , { headers: headers }).subscribe((res:any)=>{
      console.log(res)
      if(res.email){
        this.route.navigate(['/login'])
      }
      
    });
  }


  submitParticipants(item:any){

    const headers = new HttpHeaders();
    return this.http.post(GLOBAL.serviceUrl + '/service/api/fetch' ,item , { headers: headers }).subscribe((res=>{
      console.log(res)
    }));

  }


  signin(data:any){
    
    const headers = new HttpHeaders();
    return this.http.post('http://localhost:3000/service/api/signin',data , { headers: headers }).subscribe((res:any)=>{
      
      if(res.token){
        localStorage.setItem('token',JSON.stringify(res.token));
        if(res.role=='user'){
          localStorage.setItem('roll',res.role);
        }
        this.route.navigate(['/home'])
      }
    });
  }
  // /service/api/addparticpants
  Userpage(data:any){
    
    const headers = new HttpHeaders();
    return this.http.post(GLOBAL.serviceUrl  + '/service/api/addparticpants',data , { headers: headers }).subscribe((res:any)=>{
      
      // if(res.title){
        this.route.navigate(['/home'])
      // }
    });
  }



}



