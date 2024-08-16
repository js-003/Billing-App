import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loggedIn=true;
  title = 'angular';

  Log() : void{
    this.loggedIn = false;
  }
}
