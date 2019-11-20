import { Component, OnInit } from '@angular/core';
import { SocialUser }        from 'angularx-social-login';
import { AuthUserService }   from '../../services/auth/auth-user.service';

@Component({
  selector: 'ae-navbar',
  templateUrl: './ae-nav-bar.component.html',
  styleUrls: ['./ae-nav-bar.component.scss']
})
export class AeNavBarComponent implements OnInit {

  public socialUser: SocialUser;

  constructor(private auth: AuthUserService) {
    this.auth.userAuthChanged.subscribe((value) => {
      this.socialUser = value;
    });
  }

  ngOnInit() {
  }

}
