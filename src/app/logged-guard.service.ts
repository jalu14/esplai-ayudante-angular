import { Injectable }                                                       from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthUserService }                                                  from './services/auth/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {

  constructor(private auth: AuthUserService,
              private router: Router) {
  }

  canActivate() {
    const authenticated = !!this.auth.currentUser;
    if (!authenticated) this.router.navigate(['login']);
    return authenticated;
  }

}
