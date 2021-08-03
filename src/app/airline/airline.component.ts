import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
  airlineForm:any;
  airlines:any;
  constructor(private as:AirlineService, private fb:FormBuilder) {
    this.airlineForm=this.fb.group({
      id:[],
      name:[],
      country:[],
      logo:[],
      slogan:[],
      head_quaters:[],
      website:[],
      established:[],
    });
   }

  ngOnInit(): void {
    //call the service method and store the result in an array
    this.as.getAllAirlines().subscribe((data)=>{
      this.airlines=data;
    });
  }

  fnAdd()
  {
    var airline=this.airlineForm.value;
    console.log(airline);
    this.as.addAirline(airline).subscribe((data)=>{
      console.log(data);
    })
  }
}
