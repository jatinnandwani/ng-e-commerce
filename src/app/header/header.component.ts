import { Component, OnInit } from '@angular/core';
  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';
  
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Location";
    else
      this.buttonName = "Location1";
  }
}

