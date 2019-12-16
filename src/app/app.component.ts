import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  v: boolean;

  constructor(private api: ApiService){

  }

  ngOnInit(){
    this.api.myBehaviorSubjectObs$.subscribe(val=> {
      console.log("Update in App : "+val);
      this.v = val;
    });
  }

  title = 'testSpinner';
}
