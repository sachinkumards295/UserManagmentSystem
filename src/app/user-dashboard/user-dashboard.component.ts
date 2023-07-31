import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  userForm!: FormGroup

  userLoginData:any;

  constructor(public userDash: UserService) { 
    this.userForm = new FormGroup({
      email: new FormControl(''),
      phone: new FormControl(''),
      name: new FormControl(''),
    });
  }

  ngOnInit(): void {
this.userLoginData = this.userDash.getLoginUserDetail();
  }

  updateUserDetails(){

  }

  submitEditForm(){
    
  }

  

}
