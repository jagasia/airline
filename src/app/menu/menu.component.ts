import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {
  status:any="login";
  constructor(private us:UserService) { }
  ngDoCheck(): void {
    this.us.checkLoginStatus().subscribe((data)=>{
      this.status=data;
    });
  }

  ngOnInit(): void {
  }

}
