import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliverableCitiesService {

  constructor() { }

  topSearchedCities(){ 
   return [
    { image : '/assets/images/bengaluru-78062ed.webp',text  : 'Bengaluru'},
    { image : '/assets/images/delhi-8cb9a0a.webp', text  : 'Delhi' },
    { image : '/assets/images/gurugram-dcd6b56.webp', text  : 'Gurugram'},
    { image : '/assets/images/hyderabad-bafc7e9.webp', text  : 'Hyderabad'},
    { image : '/assets/images/kolkata-f960233.webp', text  : 'Kolkata'}
         ]
  }

  deliverableCities(){ 
    return [ 
      { city : 'Delhi' , 'id' : 1},
      { city : 'Mumbai' , 'id' : 1},
      { city : 'Banglore' , 'id' : 1},
      { city : 'Punjab' , 'id' : 1},
      { city : 'Himachal Pradesh' , 'id' : 1},
      { city : 'Hyderabad' , 'id' : 1},
      { city : 'chennai' , 'id' : 1},
      { city : 'Pune' , 'id' : 1},
      { city : 'Talangana' , 'id' : 1},
      { city : 'Gaziabad' , 'id' : 1},
      { city : 'Rajasthan' , 'id' : 1},
      { city : 'Gujarat' , 'id' : 1 }
    ]
   }
}
