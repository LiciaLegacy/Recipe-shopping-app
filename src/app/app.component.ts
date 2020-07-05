import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature = 'recipe';

  //this 'feature' is the feature we want to navigate to
  //and now above we create a property to actually store this feature
  //and here we set this property to what we receive as an argument
  //and thn now on the app component .html page, we use ngIf to determine which of the 2 will be displayed
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }

}
