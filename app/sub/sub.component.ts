import {Component} from '@angular/core';

@Component({
  selector:'sub',
  templateUrl:'sub.component.html'
})

export class SubComponent{
onSubmit(value:any)
 {
   console.log(value);
 }
}