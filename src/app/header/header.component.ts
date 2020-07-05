import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    //we have to attach something to this to make it listenable from the parent component
    @Output() featureSelected = new EventEmitter<string>(); //we pass string, the feature which was selected, and we have to instantiate this; 
    //call this to create an object based on the EventEmitter class
    //we will then be passing this, or firing the event to the app component; the app html component has the (featureSelected) event handler, 
    //by which it triggers onNavigate($event) to the app component 
    //where we will receive the 'where should we navigate to' information

    //we created this method first, then created the above event emitter, 'featureSelected'
    onSelect(feature:string){
        //and here we want to emit our own event, signaling which header/navbar feature has been clicked
        this.featureSelected.emit(feature);
    }
}

