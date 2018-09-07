import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpResponse } from 'selenium-webdriver/http';
import { UserModel} from '../../models/user.model'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private authStatusListener= new Observable<boolean>();
  protected apiUrl = environment.apiEndPoint
  private loggedInStatus= new BehaviorSubject<boolean>(false);
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    if(token==null || token == ""){
      return false;
    }
   return true;
    // return !this.jwtHelper.isTokenExpired(token);
  }

  login(email, password) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept','application/json');
    headers.append('access-control-allow-origin', '*');
    
    let options = new RequestOptions({ headers: this.headers });
    let loginData: UserModel = {
      username: email,
      password: password
    };
   
    return this.http
      .post(this.apiUrl + "auth/login", loginData, options)
      .pipe(map(res => res.json()));
  }

  //post request to sign up new user with username and email
  signUp(email, password) {
    let options = new RequestOptions({ headers: this.headers });
    let loginData = {
      username: email,
      password: password
    };
   
    return this.http
      .post(this.apiUrl + "auth/signup", loginData, options)
      .pipe(map(res => res.json()));
  }
  handleError(err: HttpErrorResponse) {
    return Observable.throw(err);
  }

  //check if token available
  setAuthToken(token:string){
    localStorage.setItem('token',token);
  }

  //true if user is authenticated
  getAuthenticationStatus(){
    if(localStorage.getItem('token')== null )
    {
      return false;
    }
    return true;
  }
 
  //clears local storage
  clearLocalStorage(){
    localStorage.removeItem('token');
  }

  getLoggedInStatus(){
    return this.loggedInStatus.asObservable();
  }

  setLoggedInStatus(status:boolean){
    this.loggedInStatus.next(status);
  }

  getToken():string{
   return localStorage.getItem('token');
  }
}
