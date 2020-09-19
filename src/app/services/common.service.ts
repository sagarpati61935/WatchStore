import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http:HttpClient) { }

  createUser(user){
    return this.http.post(" http://localhost:3000/users",user);
  }
  
  updateUser(){}
  deleteUser(){}
}
