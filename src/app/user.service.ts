import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserData = {
    "email":"sachinds295@gmail.com",
    "password":"96205034"
  }

  UserDataAfterLogin = [ {
    "id": "1",
    "email":"sachinds295@gmail.com",
    "phone":"6362137261",
    "name": "sachin Kumar"
  }]
  

  constructor() { }


  getUserData() {
    return this.UserData;
  }

  getLoginUserDetail(){
    return this.UserDataAfterLogin;
  }
}
