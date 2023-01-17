import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {
  }

  login(user:User):Observable<any>{

  //  const params = new HttpParams().set('username', 'mohamed').set('password', '123');
    const params = new HttpParams().set('username', user.username).set('password', user.password);

   
   return this.http.get("http://localhost:8080/api/login",{params:params});

  }

}
