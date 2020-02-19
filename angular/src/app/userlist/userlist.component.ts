import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { UserData } from '../app-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  usersList = [];
  userData = []
  singleUserData = [];
  fieldText;
  tableData: [];
  DATA: UserData[];
  table: [];
  dataSource: MatTableDataSource<Set<unknown>>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['username', 'mail', 'url', 'gender', 'createdAt', 'updatedAt', 'actions'];
  constructor(public userService: UserserviceService, public dialog: MatDialog,private router:Router) { }
  ngOnInit() {
    this.userService.getAllUsersData().subscribe((data) => {
      this.dataSource = new MatTableDataSource(this.table);
      this.userData.push(data)
      this.userData.forEach(data => {
        this.table = (data);
        console.log(this.table)

      })
      console.log(this.table)
      this.dataSource = new MatTableDataSource(this.table);
      this.dataSource.paginator = this.paginator;
    })


  }
  editButtonClicked(id,username) {
    if(username == sessionStorage.getItem('username')){
      var url = "/useredit"
      console.log(id)
      sessionStorage.setItem('id',id)
      this.router.navigateByUrl(url)
    }
    else{
      alert("Cannot Edit Please Contact Admin")
    }
  
  }






}

