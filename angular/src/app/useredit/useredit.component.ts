import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { UserData, UpdateUserData } from '../app-model';
import { Router } from '@angular/router';
interface Gender{
  value:string,
  viewValue:string
}

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {
data;
userData = []
  genderDetails: any;
  username: any;
  mail: any;
  password: any;
  url: any;
  gender: any;
  userid
  constructor(public userService:UserserviceService,private router:Router) { }

  form: FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    url: new FormControl('',Validators.required),
    mail: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required)
  });

  Gender: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'FeMale', viewValue: 'FeMale'},
    {value: 'Other', viewValue: 'Other'}
  ];
  ngOnInit() {
    console.log(sessionStorage.getItem('id'))
   this.userid = sessionStorage.getItem('id')
    this.userService.geteditUserData({id:this.userid}).subscribe(data=>{
      console.log(data)
      
      this.userData.push(data);
      this.userData.forEach((datas)=>{
      datas.forEach((datas)=>{
        this.username = datas.username;
        this.password = datas.password;
        this.mail = datas.mail;
        this.url = datas.url;
        this.gender = datas.gender
      })
        

      })
    })
  }

  selectedValue(data){
    console.log(data)
    this.genderDetails = data
      }

  submitUserData(){
    this.data = new UpdateUserData(sessionStorage.getItem('id'),this.form.get('username').value,this.form.get('password').value
    ,this.form.get('mail').value,this.form.get('url').value,this.form.get('gender').value)
    this.userService.updateUserData(sessionStorage.getItem('id'),this.data).subscribe((data)=>{
      if(data){
        console.log(data)
alert("Updated Succesfully");
this.form.reset();
this.router.navigate(["/users"])
      }
    })
  }
  deleteUser(){
    if(sessionStorage.getItem('username')===this.form.get('username').value){
      this.router.navigate(["/login"])
    }
this.userService.deleteUser(this.userid).subscribe((data)=>{
 alert("User Deleted Succesfully");
 this.form.reset();
 this.router.navigate(["/users"])
})
  }
}
