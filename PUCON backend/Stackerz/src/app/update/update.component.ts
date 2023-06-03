import { Component, OnInit } from '@angular/core';
import { AppService } from '../Service/app.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit{
searchvalue=""
  GetEventList: any=[];


ngOnInit(): void {
  
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
this.searchvalue =val
console.log(this.searchvalue,'data')
  this.appService.DeleteEvents(this.searchvalue).subscribe((res:any) =>{
  
    console.log(res,'search Events success')
    
    })

}






}
