import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmvc';

  cnt = 1
  onClick(e: any){

    e.stopPropagation()
    this.cnt++;
  }

  divClick(){
    console.log("div clickde")
  }


  bigDivClick(){
    console.log("big div clickde")
  }
}
