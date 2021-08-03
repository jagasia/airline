import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  result:any=null;
  constructor(private fb:FormBuilder, private us:UserService) {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    });
   }

  ngOnInit(): void {
  }

  fnLogin()
  {
    console.log('login')
    var username=this.loginForm.controls['username'].value;
    var password=this.loginForm.controls['password'].value;
    this.us.validateLogin(username,password).subscribe((data)=>{
      this.result=data;
      console.log('here')
      if(this.result==null)
      {
        this.result="Login failed";
      }
    });
  }
}
