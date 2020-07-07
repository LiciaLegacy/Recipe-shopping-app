import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{

    @Output() featureSelected = new EventEmitter<string>(); //we pass string, the feature which was selected, and we have to instantiate this; 

    onSelect(feature:string){
        this.featureSelected.emit(feature);
    }
}

