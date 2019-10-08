import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';
  public toogle_cart = 'hide_cart';
  
  constructor() { }

  ngOnInit() {
  }

  open_cart(){
    this.show = !this.show;
  }

}

