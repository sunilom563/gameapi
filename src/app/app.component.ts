import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
 
  template: ` <app-customers> </app-customers>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  
  constructor() { }

  ngOnInit() {
    // We call a service that gets us the data
    
    
  }
}
