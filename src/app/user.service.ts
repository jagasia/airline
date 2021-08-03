import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:8080/user';
  constructor(private http:HttpClient) { }

  checkLoginStatus()
  {    
    // alert('check login statyus')
    const myObservable=new Observable(observer=>{
      setTimeout(()=>{
        var status='login';
        var loggedUserName=localStorage.getItem("user");
        // alert(loggedUserName)
        if(loggedUserName!=null)
        {
          status='logout';
          // alert('changing to Logout');
        } 
        observer.next(status);
      },100);
    });
    return myObservable;
  }


  signup(user:any)
  {
    return this.http.post(this.url,user);
  }

  validateLogin(username:string, password:string)
  {
    return this.http.get(this.url+"/"+username+"/"+password);
  }

  modifyUser(user:any)
  {
    return this.http.put(this.url,user);
  }

  removeUser(username:string)
  {
    return this.http.delete(this.url+"/"+username);
  }

  getOtp(email:string)
  {
    return this.http.get(this.url+"/otp/"+email);
  }
}
