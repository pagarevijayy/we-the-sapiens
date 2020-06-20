import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = "WeTheSapiens"
  public quote =`"Of all people only those are at leisure who make time for philosophy, only those are really alive."`
  public quoteAuthor = `Seneca`
  constructor() { }

  ngOnInit(): void {
  }

}
