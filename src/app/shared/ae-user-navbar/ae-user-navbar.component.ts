import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SocialUser }                             from 'angularx-social-login';
import { AuthUserService }                        from '../../services/auth/auth-user.service';

@Component({
  selector: 'ae-user-navbar',
  templateUrl: './ae-user-navbar.component.html',
  styleUrls: ['./ae-user-navbar.component.scss']
})
export class AeUserNavbarComponent implements OnInit {

  @Input() public user: SocialUser;

  public dropdownActive: boolean = false;
  @HostListener('window:keydown.escape', [])
  keyDown() {
    this.dropdownActive = false;
  }

  constructor(private auth: AuthUserService) { }

  ngOnInit() {
  }

  public signOut() {
    this.auth.signOut();
  }

}
