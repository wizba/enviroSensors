
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { DataSharing } from './services/dataSharing.service';
import { EventMqttService } from './event-mqtt.service';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    
    HttpClientModule,
    ToastNotificationsModule,
    
    // MqttModule.forRoot({
    //   url:"mqtts://#{ username }:#{ key }@io.adafruit.com" 
    // }),
   
    NgCircleProgressModule.forRoot({
      
    })
  ],
  providers: [DataSharing,EventMqttService],
  bootstrap: [AppComponent]
})
export class AppModule { }
