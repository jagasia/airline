import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  result:any;
  constructor(private fb:FormBuilder, private us:UserService, private router:Router) {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    });
   }

  ngOnInit(): void {
  }

  fnLogin()
  {
    // console.log('login')
    var username=this.loginForm.controls['username'].value;
    var password=this.loginForm.controls['password'].value;
    this.us.validateLogin(username,password).subscribe((data)=>{
      // this.result=data;

      console.log(data)
      this.result=data;
      if(this.result==null)
      {
        this.result="Login failed";
      }else
      {
        //login is successful
        localStorage.setItem("user",JSON.stringify(data));
        this.us.checkLoginStatus().subscribe();
        this.router.navigateByUrl("home");        
      }
    });
  }
}
