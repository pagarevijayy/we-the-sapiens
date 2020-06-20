import { Injectable } from '@angular/core';
import * as $ from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  isMobileView(): boolean {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
