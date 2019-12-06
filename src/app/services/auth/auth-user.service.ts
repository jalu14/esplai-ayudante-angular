import { Injectable }                                   from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Subject }                                      from 'rxjs';
import { Router }                                       from '@angular/router';
import { ApiService }                                   from '../api/api.service';
import { StorageKeyConstant }                           from '../../core/constants';
import * as jwt                                         from 'jwt-decode';
import * as moment                                      from 'moment';

@Injectable()
export class AuthUserService {

  public currentUser: SocialUser;

  public userAuthChanged = new Subject<SocialUser>();

  constructor(private ngxAuth: AuthService,
              private api: ApiService,
              private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem(StorageKeyConstant.socialUser));
    if (!this.currentUser) return;
    this.userAuthChanged.next(this.currentUser);
    this.checkTokenExp();
  }

  public signIn() {
    this.ngxAuth.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((data) => {
        console.log(data);
        this.currentUser = data;
        localStorage.setItem(StorageKeyConstant.token, this.currentUser.idToken);
        localStorage.setItem(StorageKeyConstant.socialUser, JSON.stringify(this.currentUser));
        this.apiLogin();
      });
  }

  public signOut() {
    this.ngxAuth.signOut()
      .then((res) => {
        console.log(res);
        this.currentUser = null;
        localStorage.removeItem(StorageKeyConstant.token);
        this.userAuthChanged.next(null);
        this.router.navigate(['login']);
      });
  }

  private apiLogin() {
    this.api.get('login').subscribe(
      (res) => {
        localStorage.setItem(StorageKeyConstant.token, res);
        this.userAuthChanged.next(this.currentUser);
        this.checkTokenExp();
        this.router.navigate(['']);
      },
      (err) => {localStorage.removeItem(StorageKeyConstant.token)}
    )
  }

  private checkTokenExp() {
    const token = localStorage.getItem(StorageKeyConstant.token);
    if (!token) return;
    const decoded = jwt(token);
    const decodedExp = moment.unix(decoded.exp);
    const diff = decodedExp.diff(moment(), 'minutes');
    if (diff < 10 && diff > 0) {
      this.api.get('login/extend').subscribe(
        (res) => localStorage.setItem(StorageKeyConstant.token, res),
        (err) => console.log(err)
      );
    } else if (diff <= 0) {
      this.signOut();
    }
    setTimeout(() => {
      this.checkTokenExp();
    }, 60000);
  }
}
