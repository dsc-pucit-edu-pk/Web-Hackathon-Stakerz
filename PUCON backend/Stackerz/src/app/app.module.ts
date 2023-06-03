import { NgModule ,APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FlexLayoutModule } from "@angular/flex-layout";
import { NgToastModule } from 'ng-angular-popup' 
// import { SharedModule } from './shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OrderModule } from 'ngx-order-pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ParticipentsComponent } from './participents/participents.component';
import { AddEventComponent } from './add-event/add-event.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
// import{Update}
import {MatNativeDateModule} from '@angular/material/core';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

@NgModule({


  declarations: [
    AppComponent,
    HomeComponent,
    ParticipentsComponent,
    AddEventComponent,
    UpdateComponent,
  LoginComponent,
  RegisterComponent,
  UserComponent


  ],
  imports: [
  
    BrowserModule,
    BrowserAnimationsModule,
   CommonModule,
   FormsModule,
   MatMenuModule,
   MatSelectModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
 MatSelectModule,
    // MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule,



    FlexLayoutModule,
    AppRoutingModule
  ],
 
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  bootstrap: [AppComponent],
  
})
export class AppModule { }
