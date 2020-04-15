import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveringCitiesService {

  constructor() { }

  getDeliveringCities(){
    return [
        { cityName : "Delhi" ,
          id : "Delhi"
        },
        { cityName : "Mumbai" ,
          id : "Mumbai"
        },
        { cityName : "Banglore",
          id : "Banglore"
        },
        { cityName : "Punjab",
          id : "Punjab" }
        ,
        { cityName : "Hyderabad",
          id : "Hyderabad"
        },
        { cityName : "Talangana",
          id : "Talangana"
        }
    ]
  }
}
