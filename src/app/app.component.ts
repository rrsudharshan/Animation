import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olive';
   condition :boolean = false;
  onclick(val){
   // alert(val);
    if(val === true){
      this.condition  = false;
    }else{
      this.condition  = true;
    }
  };
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];
  color = 'accent';
  checked = false;
  disabled = false;

}
