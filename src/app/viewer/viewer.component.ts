import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  str: string = "";
  data : any = [];
  rfcForm: FormGroup;

  constructor(private api:ApiService, private fb:FormBuilder) { }

  ngOnInit() {
    this.rfcForm = this.fb.group({
      rfcNumber: ['', [Validators.required]],
    });
  }

  fetchRFC(){
    console.log(this.rfcForm.value.rfcNumber);
    this.str = this.rfcForm.value.rfcNumber;
    this.api.get_rfc(parseInt(this.str)).subscribe(data => {
      this.data = data;
    },
    err => {
      console.log(err);
    });
  }

}
