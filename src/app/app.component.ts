import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Toaster } from 'ngx-toast-notifications';
import { DataSharing } from './services/dataSharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalRef: MDBModalRef;
  searchText:string;
  inputForm:any={
    name:'',
    logo_url:'',
    openingTime:'',
    closingTime:''
  }

  editInputForm:any={
    name:'',
    logo_url:'',
    openingTime:'',
    closingTime:''
  }
  
  resturents:any[] =[];
  showModal:boolean = false;
  seletedResturant:any;
  
  constructor(private modalService: MDBModalService,
    private toaster: Toaster,
    private dataSharing:DataSharing) {}
  ngOnInit(): void {
    
    //this.subscribeToTopic();
    this.showToast('Soil sensor','Soil is dry turning ON water-pump','warning')
    this.showToast('Water sensor','The is no water in the tank, please fill-up','danger')
  }

 
  

  showToast(title,body,color) {
    this.toaster.open({ text: body,
      caption: title,
      type:color ,
      position:'top-right'
    });
  }

  ////////////////////////////MQTT/////////////////////////
  events: any[];
    private deviceId: string = 'sensorData';
    subscription: Subscription;

    //stop listening for data if switched off
    ngOnDestroy(): void {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }

  // listens to data passed from adafruit to it
  
}
