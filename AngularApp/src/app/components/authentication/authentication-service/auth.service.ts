import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected apiUrl = environment.apiEndPoint;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private http: Http) {

  }

  login(email, password) {
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    //headers.append('Accept','application/json');
    //headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,DELETE,PUT');
    //headers.append('Access-Control-Allow-Headers','Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization');
    //headers.append('Access-Control-Allow-Origin','http://localhost:4200');
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
}
