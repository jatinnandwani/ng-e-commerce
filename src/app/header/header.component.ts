import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  public show:boolean     = false;
  public buttonName:any   = 'Show';
  public toogle_cart      = 'hide_cart';
  public header_heading   = 'Flat Rs.100 Cashback | Code: HAPPY100 | Min Order: Rs.1500';

  public dropdownOptions1 = [
    {id: 1, name: "United States"},
    {id: 2, name: "Australia"},
    {id: 3, name: "Canada"},
    {id: 4, name: "Brazil"},
    {id: 5, name: "England"}
  ];
  public dropdownOptions = ['United','Australia','Canada','Brazil','barara'];
  public selectedValue = null;               
  public topsearchdcities = [
        {
          image : '/assets/images/bengaluru-78062ed.webp',
          text  : 'Bengaluru'
        },
        {
          image : '/assets/images/delhi-8cb9a0a.webp',
          text  : 'Delhi'
        },
        {
          image : '/assets/images/gurugram-dcd6b56.webp',
          text  : 'Gurugram'
        },
        {
          image : '/assets/images/hyderabad-bafc7e9.webp',
          text  : 'Hyderabad'
        },
        {
          image : '/assets/images/kolkata-f960233.webp',
          text  : 'Kolkata'
        }
  ]
        
  config = {
    displayKey:"description", //if objects array passed which key to be displayed defaults to description
    search:false, //true/false for the search functionlity defaults to false,
    height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: ()=>{}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    // limitTo: options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder:'Search', // label thats displayed in search input,
    searchOnKey: 'name' // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  }
public name = 'select sity';

  constructor() { }

  ngOnInit() {
  }

  open_cart(){
    this.show = !this.show;
  }

  selectionChanged(){

  }

}

