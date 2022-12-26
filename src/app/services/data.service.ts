import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDetails:any={
    1000:{acno:1000,username:'amal',password:1000,balance:2000},
    1001:{acno:1001,username:'sam',password:1001,balance:7000},
    1002:{acno:1002,username:'sherry',password:1002,balance:5000}
  }
  constructor() { }

  register(acno:any,username:any,password:any){
    var userDetails = this.userDetails
    if(acno in this.userDetails){
      return false;
    }else{
      userDetails[acno]={
        acno:acno,
        username:username,
        password:password,
        balance:0,
      }
      return true;
    }
  }
  login(acno:any,pswd:any){
    var userDetails = this.userDetails
    if(acno in this.userDetails){
      if(pswd==this.userDetails[acno].password){
          return true;
        }
      else{
          alert('Invalid Password')
          return false
      }
    }
    else{
      alert('Invalid user details')
      return false
    }

  }    
  deposit(acno:any,pswd:any,amt:any){
    var amount = parseInt(amt)
    let userDetails=this.userDetails;
    if(acno in this.userDetails){
      if(pswd==this.userDetails[acno].password){
        userDetails[acno].balance += amount;
        return userDetails[acno].balance
      }
      else{
        alert('Invalid password')
        return false
      }
    }
    else{
      alert('Invalid user details')
      return false
    }

  }
  withdraw(acno1:any,pswd1:any,amt1:any){
    var amount = parseInt(amt1)
    let userDetails=this.userDetails;
    if(acno1 in this.userDetails){
      if(pswd1==this.userDetails[acno1].password){
        userDetails[acno1].balance -= amount;
        return userDetails[acno1].balance
      }
      else{
        alert('Invalid password')
        return false
      }
    }
    else{
      alert('Invalid user details')
      return false
    }


  }
}

