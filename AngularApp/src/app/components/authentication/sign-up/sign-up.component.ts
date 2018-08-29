import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../authentication-service/auth.service';
import { Route, Router } from '../../../../../node_modules/@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegistrationSubmit(form : NgForm )
  {
   this.authService.setLoggedInStatus(false);
    //console.log(form.value.email, form.value.password);
    // this.authService.signUp(form.value.email, form.value.password)
    // .subscribe( responseData => {
    //   if(responseData.auth){
    //     console.log("sign Up success")
    //     this.router.navigate(['/Login']);
    //   }
    //   else{

    //   }
    // },
    // error => {
    //   console.log(error);
    // });

  }
}
