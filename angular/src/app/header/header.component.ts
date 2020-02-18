import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
id:string;
  constructor(private router:Router) {
    this.id = sessionStorage.getItem('username');
   }

  ngOnInit() {
    this.id = sessionStorage.getItem('username');
    console.log(this.id)
  }
  logout(){
    var url ="/login"
    this.router.navigateByUrl(url);
    sessionStorage.setItem('isLoggedIn',"false") ;
    this.id  =""
  }
}
