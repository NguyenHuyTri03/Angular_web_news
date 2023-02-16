import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenService } from './services/authen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'test01';

  constructor(private auth: Auth, private authService: AuthenService, private router: Router){   }

  ngOnInit(){
    onAuthStateChanged(this.auth, (user) =>{
      if(user){
        this.authService.currUsr = user;
        this.router.navigate(['/home']);
      }else{
        this.authService.currUsr = null;
      }
    })
  }
}