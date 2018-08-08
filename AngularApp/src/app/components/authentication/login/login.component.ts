import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router }  from '@angular/router'; 
import { Http ,Headers, RequestOptions} from '@angular/http'; 
import {environment} from '../../../../environments/environment'
import { AuthService } from '../authentication-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected baseEndPoint = environment.apiEndPoint;

  constructor(private router: Router, private http: Http, private loginservice:AuthService) { }
  private username:string;
  private pswd:string;
  loginStatus:boolean;
  
  ngOnInit() {
  this.loginStatus=false;
  }

  onSignUpClick(){
    this.router.navigate(['/Signup']);
  }

  onLoginSubmit(form : NgForm){
 
    this.loginservice.login(form.value.email, form.value.password)
      .subscribe( responseData => {
        if(responseData.auth){
          this.router.navigate(['/']);
          localStorage.setItem('token', responseData.token);  
        }
        else{

        }
      },
      error => {
        console.log(error);
      });
  }

 

}
export class UserModel{
    username: string;
    password: string;
    
}