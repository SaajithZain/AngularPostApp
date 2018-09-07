import { Injectable } from '@angular/core';
import  { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastAlertService {

  constructor(private toaster: ToastrService) { }

  toastSuccess(responseData){

    this.toaster.success(responseData,"",{
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
      
    });
  }

  toastFailed(responseData: string){
    this.toaster.error(responseData,"",{
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
      
    });
  }
}
