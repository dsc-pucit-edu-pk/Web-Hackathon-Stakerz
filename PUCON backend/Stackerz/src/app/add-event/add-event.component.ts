import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from '../Service/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent  implements OnInit{

  selectedDateTime!: Date;

  titleAlert: string = 'This field is required';
  poster: any = "";
  posterList :any=[]
  selectedValue=""
  TimeList =[

    '1 Days',
    '2 Days',
    '3 Days',
    '4 Days',
    '5 Days',
    '6 Days',
    '7 Days',
    '8 Days',
    '9 Days',
    '10 Days',
  ]

  GetData={
    
    title:"",
    desc:"",
    date:"",
    starttime:"",
    endtime:"",
   duration:""
  }
 

ngOnInit(): void {
 
}




constructor( public appService: AppService,
  private route:Router,
  ){}





PosterChangeEvent(fileInput: any) {
  this.posterList = <Array<File>>fileInput.target.files;
  console.log(this.posterList,'....')
  const reader = new FileReader();
  reader.readAsDataURL(this.posterList[0]);
  reader.onload = (_event) => {
    this.poster = reader.result;
  }


}


AddEvent(){


  const formData: any = new FormData();
  
    formData.append('title', this.GetData.title);
    formData.append('desc', this.GetData.desc);
    formData.append('date',this.GetData.date)
    formData.append('starttime',this.GetData.starttime);
    formData.append('endtime', this.GetData.endtime);
    formData.append('poster',this.posterList[0])
    formData.append('duration',this.GetData.duration);
  
console.log(Array.from(formData),'values get')
this.appService.CreatEvent(formData).subscribe((res:any)  =>{



console.log(res,'CREAT  Event Success')
this.route.navigate(['/Participents'])

})


  }




}




