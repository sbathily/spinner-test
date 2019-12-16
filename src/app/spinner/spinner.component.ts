import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit{

  isloading : boolean;  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.myBehaviorSubjectObs$.subscribe(
      val=> {
      console.log("Update : "+val);
      this.isloading = val;
      }, 
      err => {
        console.log(err);
      })
    this.testToggle();
  }

  testToggle(){
    setInterval(()=>{this.isloading = !this.isloading;},3000);
  }
  

}
