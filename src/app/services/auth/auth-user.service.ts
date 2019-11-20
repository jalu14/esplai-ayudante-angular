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
  }

  public signIn() {
    this.ngxAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((data) => {
        console.log(data);
        this.currentUser = data;
        localStorage.setItem('token', '1');
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
