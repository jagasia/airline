import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:any;
  message:string='';
  txtOtp:string='12';
  x=true;
  constructor(private fb:FormBuilder, private us:UserService) {
    this.signupForm=this.fb.group({
      username:[],
      password:[],
      cpassword:[],
      firstName:[],
      lastName:[],
      email:[],
      phone:[],
      otp:[]
    });
   }

  ngOnInit(): void {
  }

  fnSignup()
  {
    // alert(JSON.stringify(this.signupForm.value));
    this.us.signup(this.signupForm.value).subscribe((data)=>{
      console.log(data);
    });
  }
  fnGenerateOtp()
  {
      var email=this.signupForm.controls['email'].value;
      this.us.getOtp(email).subscribe((data)=>{
        console.log(data);
        var otp=data.toString();
        localStorage.setItem("otp",otp);
      });

  }

  fnValidateOtp()
  {
    // this.txtOtp
    var otp=localStorage.getItem("otp");
    console.log(otp);
    console.log("txtOpt is "+this.txtOtp);
    if(this.txtOtp==otp)
    {
      this.x=false;
    }else
    {
      this.x=true;
    }
  }
}
