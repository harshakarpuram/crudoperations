import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { UserData } from '../app-model';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';
interface Gender{
  value:string,
  viewValue:string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
data;
myreg = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi
  genderDetails: any;
  constructor(public userService:UserserviceService, private router:Router) { }

  form: FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    url: new FormControl( '', [Validators.required,Validators.pattern(this.myreg)]),
    mail : new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    gender: new FormControl( '', Validators.required),
  });
  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  Gender: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'FeMale', viewValue: 'FeMale'},
    {value: 'Other', viewValue: 'Other'}
  ];
  ngOnInit() {
  }
  selectedValue(data){
    console.log(data)
    this.genderDetails = data
      }
  submitUserData(){
    this.data = new UserData(this.form.get('username').value,this.form.get('password').value
    ,this.form.get('mail').value,this.form.get('url').value,this.genderDetails)
    this.userService.sendUserData(this.data).subscribe((data)=>{
      if(data){
        console.log(data)
        alert("Registered Succesfully ,Please Login");
        this.router.navigate(["/login"])
//alert(data);
this.form.reset()
      }
    })
  }

}

