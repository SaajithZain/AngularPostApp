import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "./components/main/main.component";
import { LoginComponent } from "./components/authentication/login/login.component";
import { SignUpComponent } from "./components/authentication/sign-up/sign-up.component";
import { PageNotFoundComponent } from "./components/page-not-found/pagenotfound-component";
import { GetPostsComponent } from "./components/posts/get-posts/get-posts.component";


const appRoutes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: MainComponent},
    { path: 'Login', component: LoginComponent},
    { path: 'Signup', component:SignUpComponent},
    { path: 'Posts', component:GetPostsComponent},
    { path: "**", component:PageNotFoundComponent}
  ];
  
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRouterModule{

}  