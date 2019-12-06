import { Injectable }                          from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { StorageKeyConstant }                  from '../../core/constants';
import * as jwt                                from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {

  constructor() {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const requiredPerms = route.data['perms'] as Array<string> || [];

    const token = localStorage.getItem(StorageKeyConstant.token);
    const perms = jwt(token).perms || [];
    for (let perm of requiredPerms) {
      if (!perms.includes(perm)) return false;
    }
    return true;
  }

}
