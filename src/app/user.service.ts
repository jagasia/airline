import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string='http://localhost:8080/user';
  constructor(private http:HttpClient) { }

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
}
