import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>({email: '',isLoggedIn: false});

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'accept': 'application/json',
  });

  private baseUrl: string = 'http://localhost:8080';

  
  constructor(private router: Router,private http: HttpClient) { }

  public userLogin(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, user, {headers: this.headers} )
  }

  public login(user: any): void {
    this.userLogin(user).subscribe(data => {
      console.log('in login data ', data)
      if(data.status === 200) {
        this.currentUser.next({isLoggedIn: true,email: user.email});
        console.log('in login pipe',this.currentUser.value);
        this.router.navigate(['home']);
      }
    })
  }

  public signup(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/register`,user,{headers: this.headers});
  }


  public logout(): void {
    this.currentUser.next({email: '', isLoggedIn: false});
  }
}
