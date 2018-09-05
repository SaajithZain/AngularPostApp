import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router }  from '@angular/router'; 
import { Http ,Headers, RequestOptions} from '@angular/http'; 
import {environment} from '../../../../environments/environment'
import { AuthService } from '../authentication-service/auth.service';
import  { ToastrService } from 'ngx-toastr';
import {ToastAlertService} from '../../../Services/toast.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected baseEndPoint = environment.apiEndPoint;

  constructor(private router: Router, private http: Http, 
              private authService :AuthService, 
              private toaster:ToastrService,
              private toast:ToastAlertService
            ) { }
  private username:string;
  private pswd:string;
  loginStatus:boolean;
  
  ngOnInit() {
  this.loginStatus=false;
  }

  onSignUpClick(){
    this.router.navigate(['/Signup']);
  }

  //called on submitting login
  onLoginSubmit(form : NgForm){
  
    this.authService.login(form.value.email, form.value.password)
      .subscribe( responseData => {
        if(responseData.auth){
          this.router.navigate(['/']);
          this.authService.setAuthToken(responseData.token);
          this.authService.setLoggedInStatus(true);                    
          this.toast.toastSuccess(responseData.message);
      }
        else{
        }
      },
      error => {
          
          this.toast.toastFailed("Login Failed");
      });

  }
  
}
export class UserModel{
    username: string;
    password: string;
    
}