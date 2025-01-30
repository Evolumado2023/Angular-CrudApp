import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @Input () title : string = "";
  @Input () textBtn : string = "";
  @Output ("navigate") onNavigate  = new EventEmitter(); 

  navigate() {
    this.onNavigate.emit();
  }

}
