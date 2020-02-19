import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public dialog: MatDialog,private userService:UserserviceService,private router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username : new FormControl('',Validators.required),
      password :new FormControl('',Validators.required),
  });
  sessionStorage.setItem('isLoggedIn',"false") ;
  }

onClick(){
 var myurl ='/users'
  this.userService.loginVerify({username:this.loginForm.get('username').value,
  password:this.loginForm.get('password').value}).subscribe((data)=>{
    console.log(data)
    if(data.toString() == this.loginForm.get('username').value.toString() ){
      sessionStorage.setItem('username',data.toString());
      sessionStorage.setItem('isLoggedIn',"true") ;
      this.router.navigateByUrl(myurl)
    }
    else{
      alert(data);
      this.loginForm.reset()
    }
  })
}
}
