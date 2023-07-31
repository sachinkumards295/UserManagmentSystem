import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  userData:any;

  constructor(public user: UserService, private route: Router){

    this.myForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

  }
  ngOnInit(): void {

   this.userData = this.user.getUserData();
   
  }

  Validation(){
    if(this.myForm.controls['email'].value && this.myForm.controls['email'].value  == this.userData.email && this.userData.password ){
       this.route.navigate(['user-dashboard']);
    } else {
      alert("Hey ! Please enter a Valid Data");
    }
 



  }

}
