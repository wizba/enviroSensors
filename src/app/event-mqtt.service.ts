import { Injectable } from '@angular/core';


import { IMqttMessage, MqttService } from "ngx-mqtt";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventMqttService {

  private endpoint: string='Rabopape';

  constructor(
    private _mqttService: MqttService,
  ) {
    this.endpoint = 'events';
  }

  topic(deviceId: string): Observable<IMqttMessage> {
    let topicName = `/${this.endpoint}/f/${deviceId}`;     
    return this._mqttService.observe(topicName);
  }
}