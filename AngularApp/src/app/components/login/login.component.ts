import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Router }  from '@angular/router'; 
import { Http ,Headers} from '@angular/http'; 
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected baseEndPoint = environment.apiEndPoint;

  constructor(private router: Router, private http: Http) { }
  private username:string;
  private pswd:string;
  ngOnInit() {
  }

  onSignUpClick(){
    this.router.navigate(['/Signup']);
  }

  onLoginSubmit(form : NgForm,name){
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let model:UserModel=new UserModel(); 
    model.username=form.value.email;
    model.password=form.value.password;
    let body = JSON.stringify(model);
  
    this.http.post(this.baseEndPoint+'login',body,{headers: headers}).subscribe(
      res=>{
        console.log(res.json);
      },
      error=>{
        console.log("error");
      }
    );
  }

 

}
export class UserModel{
    username: string;
    password: string;
    
}