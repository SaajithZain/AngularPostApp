import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { PageNotFoundComponent} from './components/page-not-found/pagenotfound-component'
import { AppRouterModule } from './app.routes-module';
import { GetPostsComponent } from './components/posts/get-posts/get-posts.component';
import { CreatePostComponent } from './components/posts/create-post/create-post.component';
import { AuthService} from './components/authentication/authentication-service/auth.service';
import { HeaderComponent } from './components/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SignUpComponent,
    PageNotFoundComponent,
    GetPostsComponent,
    CreatePostComponent,
    HeaderComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
