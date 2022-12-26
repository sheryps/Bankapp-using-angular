import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private ds:DataService,private router:Router){}//database from services

  ngOnInit():void{}

  // userDetails:any={
  //   1000:{acno:1000,username:'amal',password:1000,balance:2000},
  //   1001:{acno:1001,username:'sam',password:1001,balance:7000},
  //   1002:{acno:1002,username:'sherry',password:1002,balance:5000}
  // }
  uname:any
  acno:any
  pswd:any
  register(){
    var uname = this.uname;
    var acno = this.acno;
    var pswd = this.pswd
    var userDetails = this.ds.userDetails;
    const result = this.ds.register(acno,uname,pswd)
    if (result){
      alert('Registeration Sucessfull')
      this.router.navigateByUrl('')
    }else{
      alert('register Failure')
    }
  }
}
