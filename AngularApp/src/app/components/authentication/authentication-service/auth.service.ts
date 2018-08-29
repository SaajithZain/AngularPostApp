import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ParseTreeResult, identifierModuleUrl } from '../../../../../node_modules/@angular/compiler';
//import { JwtHelperService } from '@auth0/angular-jwt';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

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
    let options = new RequestOptions({ headers: this.headers });
    let loginData = {
      username: email,
      password: password
    };
    return this.http
      .post(this.apiUrl + "login", loginData, options)
      .pipe(map(res => res.json()));
  }

  signUp(email, password) {
    let options = new RequestOptions({ headers: this.headers });
    let loginData = {
      username: email,
      password: password
    };
   
    return this.http
      .post(this.apiUrl + "signup", loginData, options)
      .pipe(map(res => res.json()));
  }
  handleError(err: HttpErrorResponse) {
    return Observable.throw(err);
  }

  
  setAuthToken(token:string){
    localStorage.setItem('token',token);
  }

  getAuthenticationStatus(){
    if(localStorage.getItem('token')== null )
    {
      return false;
    }
    return true;
  }
 
  clearLocalStorage(){
    localStorage.removeItem('token')
  }

  getLoggedInStatus(){
    return this.loggedInStatus.asObservable();
  }

  setLoggedInStatus(status:boolean){
    this.loggedInStatus.next(status);
  }
}
