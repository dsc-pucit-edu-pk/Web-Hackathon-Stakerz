import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ParticipentsComponent } from './participents/participents.component';
import { AddEventComponent } from './add-event/add-event.component';
// import { UpdateEventComponentimplements } from './update-event/update-event.component';
// import { UpdateEventComponentimplements } from './update-event/update-event.component';
import { UpdateComponent } from './update/update.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

 {
  path:'home',
  component:HomeComponent
 },
 {
  path:'Participents',
  component:ParticipentsComponent
 },  
 {
  path:'AddEvent',
  component:AddEventComponent
 },
 
 {
  path:'update',
  component:UpdateComponent
 }
 ,
 {
  path:'user',
  component:UserComponent
 }
 ,
 {
  path:'login',
  component:LoginComponent
 }
 ,
 {
  path:'register',
  component:RegisterComponent
 }
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
