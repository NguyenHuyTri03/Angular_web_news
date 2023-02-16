import { Component } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loginState = false;

  constructor(public authService: AuthenService){}

  chkLogin(){
    if(this.authService.currUsr != null){
      this.loginState = true;
    }
  }
}
