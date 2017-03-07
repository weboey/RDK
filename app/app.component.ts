import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  styles:['h1{color:#00A}'],
  styleUrls:['app/test.css'],
})
export class AppComponent  { name = 'Angular22222'; }
