import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = "[ WeTheSapiens ]";
  public about = "[ About ]";
  public quote = `"Of all people only those are at leisure who make time for philosophy, only those are really alive."`;
  public quoteAuthor = `Seneca`;
  public isMobile: boolean;

  constructor(
    private _deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.isMobile = this._deviceService.isMobileView();

    // change the menu quote and author after set interval (selective 7-8)

  }

}
