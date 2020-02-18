import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginComponent } from './login/login.component';
import { UsereditComponent } from './useredit/useredit.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'register', component: HomeComponent },
  { path: 'users', component: UserlistComponent,canActivate: [AuthGuard] },
  { path: 'useredit', component: UsereditComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
