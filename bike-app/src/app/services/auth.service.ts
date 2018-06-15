import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient   } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
//import { JwtHelperService } from '@auth0/angular-jwt'

//import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class AuthService {

authToken: any;
user: any;

  constructor(private http: HttpClient, 
  //  public jwtHelper: JwtHelperService
  ) { }

  registerUser(user):any{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers}).pipe(
    map(res => res)
  )
  }

  authenticateUser(user):any{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers}).pipe(map(res=>res));
  }

 getProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
    .pipe(map(res=>res));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken=token;
    this.user=user;
    
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken=token;
  }
loggedIn(){
  // return this.jwtHelper.isTokenExpired('id_token');
  return true
}

  logout(){
    this.authToken= null;
    this.user= null;
    localStorage.clear();
  }
}
