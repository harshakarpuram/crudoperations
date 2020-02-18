import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserserviceService } from '../userservice.service';
import { FormGroup, FormControl } from '@angular/forms';
interface Gender{
  value:string,
  viewValue:string
}
@Component({
  selector: 'app-reposdialog',
  templateUrl: './reposdialog.component.html',
  styleUrls: ['./reposdialog.component.scss']
})
export class ReposdialogComponent implements OnInit {
  userRepodata: Object;
  constructor(
    public dialogRef: MatDialogRef<ReposdialogComponent>,public userService : UserserviceService,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    url: new FormControl(''),
    mail: new FormControl(''),
  });

  Gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'feale', viewValue: 'FeMale'},
    {value: 'other', viewValue: 'Other'}
  ];
  ngOnInit(){

  
  }

}
