import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'BuyMe';
  childData: number;

}
  
// if(window.location.href == 'http://localhost:7781/product'){
//   console.log('Yes you are in product');
// }
