import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http :HttpClient) { }

loginVerify(data){
  return this.http.post('http://localhost:3000/verify',data,{responseType:'text'})
}
getAllUsersData(){
  return this.http.get('http://localhost:3000/getuserdata')
}
sendUserData(data){
  return this.http.post('http://localhost:3000/postuserdata',data)
}
geteditUserData(data){
  return this.http.post('http://localhost:3000/getsingleuserdata',data)
}
updateUserData(id,data){
  return this.http.put('http://localhost:3000/updateuserdata/'+id,data)
}
deleteUser(id){
  return this.http.delete('http://localhost:3000/deleteuser/'+id)
}
}
