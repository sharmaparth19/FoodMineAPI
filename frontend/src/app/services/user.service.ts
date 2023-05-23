import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../shared/model/user';
import { IUserLogin } from '../shared/interface/IUserlogin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User())
  public userObservable!: Observable<User>;
  constructor(
    private http:HttpClient
    ) { 
    this.userObservable = this.userSubject.asObservable();
  }

  // login(userLogin:IUserLogin):Observable<User>{
    
  // }
}
