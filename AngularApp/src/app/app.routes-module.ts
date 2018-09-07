import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from '@angular/http';
import { MainComponent } from "./components/main/main.component";
import { LoginComponent } from "./components/authentication/login/login.component";
import { SignUpComponent } from "./components/authentication/sign-up/sign-up.component";
import { PageNotFoundComponent } from "./components/page-not-found/pagenotfound-component";
import { GetPostsComponent } from "./components/posts/get-posts/get-posts.component";
 import { AuthGuardService as AuthGuard, AuthGuardService} from "./Services/authentication-service/auth-guard-service"

const appRoutes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: MainComponent,canActivate: [AuthGuard]},
    { path: 'Login', component: LoginComponent},
    { path: 'Signup', component:SignUpComponent},
    { path: 'Posts', component:GetPostsComponent,canActivate: [AuthGuard]},
    { path: "**", component:PageNotFoundComponent}
  ];
  
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes),
        HttpModule,
        
    ],
    providers: [
        AuthGuard
      ],
    exports: [RouterModule]
})

export class AppRouterModule{

}  