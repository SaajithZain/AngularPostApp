import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { PostModel } from '../../models/post.model'
import { AuthService } from '../../Services/authentication-service/auth.service'
import { BehaviorSubject, Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class PostService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  post(title: string, description: string) {
    let token:string = this.authService.getToken();

    let newheader = new HttpHeaders({
      'token': token
    });
    // let header = new Headers({ 'Content-Type': 'application/json' });
    // header.append('Accept', 'application/json');
    // header.append('access-control-allow-origin', '*');
    // header.append('token', token);
    // console.log("token :  "+token);
    // let options = new RequestOptions({ headers: header });
    let postData: PostModel = {
      _id:null,
      postTitle: title,
      postDescription: description

    };

    return this.http
      .post(environment.apiEndPoint + "post", postData, { headers:newheader});  
  }


  getUserPost(){
    let token:string = this.authService.getToken();
    
    return this.http.get(environment.apiEndPoint+"post");   
  }

  updatePostdata(){
  }
}
