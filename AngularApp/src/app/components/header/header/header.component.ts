import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/authentication-service/auth.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isLoggedIn:boolean=false;
  constructor(private authService : AuthService, private router: Router) { }
  
  ngOnInit() {
    this.authService.getAuthenticationStatus();
    this.authService.getLoggedInStatus().subscribe(res=>{
      console.log(res);
      this.isLoggedIn=res;
    });
  }

  onLogout(){
    console.log("token cleared");
    this.authService.clearLocalStorage();
    this.router.navigate(['/Login']);
    this.authService.setLoggedInStatus(false);
  }


  
}
