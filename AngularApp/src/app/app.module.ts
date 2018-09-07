import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { PageNotFoundComponent} from './components/page-not-found/pagenotfound-component'
import { AppRouterModule } from './app.routes-module';
import { GetPostsComponent } from './components/posts/get-posts/get-posts.component';
import { AuthService} from './Services/authentication-service/auth.service';
import { HeaderComponent } from './components/header/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastAlertService} from  './Services/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SignUpComponent,
    PageNotFoundComponent,
    GetPostsComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    HttpClientModule,
    AppRouterModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    ToastAlertService,
    NgForm
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
