import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider } from '@angular/fire/auth';
import { signInWithPopup, User } from '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private auth: Auth) { }

  currUsr!: User | null;
  loginState: boolean = false;

  async loginWithGG(){
    let provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  logOut(){
    this.auth.signOut();
  }
}
