import { Injectable }                                   from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Subject }                                      from 'rxjs';
import { Router }                                       from '@angular/router';

@Injectable()
export class AuthUserService {

  public currentUser: SocialUser;

  public userAuthChanged = new Subject<SocialUser>();

  constructor(private ngxAuth: AuthService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('token'));
    if (!this.currentUser) return;
    this.userAuthChanged.next(this.currentUser);
  }

  public signIn() {
    this.ngxAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((data) => {
        console.log(data);
        this.currentUser = data;
        localStorage.setItem('token', JSON.stringify(this.currentUser));
        this.userAuthChanged.next(this.currentUser);
        this.router.navigate(['']);
      });
  }

  public signOut() {
    this.ngxAuth.signOut()
      .then((res) => {
        console.log(res);
        this.currentUser = null;
        localStorage.removeItem('token');
        this.userAuthChanged.next(null);
        this.router.navigate(['login']);
      });
  }
}
