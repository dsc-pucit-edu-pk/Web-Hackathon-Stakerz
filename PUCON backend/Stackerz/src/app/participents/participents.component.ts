import { Component, OnInit } from '@angular/core';
import { AppService } from '../Service/app.service';

@Component({
  selector: 'app-participents',
  templateUrl: './participents.component.html',
  styleUrls: ['./participents.component.css']
})
export class ParticipentsComponent implements OnInit {
GetEventList:any=[]
searchvalue=""
role='admin'
ngOnInit(): void {
  if(localStorage.getItem('user')){
     this.role='user';
  }
  this.GetEvents()

}

submit(item:any){
  
  this.appService.submitParticipants(item)

}


constructor( public appService: AppService,){}


path=""

GetEvents(){

this.appService.GetEvent().subscribe((res:any) =>{
this.GetEventList = res
console.log(this.GetEventList,'Get Data of Events')

})

}

Delete(item:any){

  this.appService.DeleteEvents(item._id).subscribe((res:any) =>{
  
    console.log(res,'Delete of Events success')
    const index: number = this.GetEventList.indexOf(item);
    if (index !== -1) {
        this.GetEventList.splice(index, 1);
    }        
    })
  
}


search(val:any){
console.log(this.searchvalue)
console.log(val,'data')
this.GetEventList=[]  
this.appService.Search(this.searchvalue).subscribe((res:any) =>{
  
this.GetEventList =res

    
    })

}



update(item:any){



}



}
