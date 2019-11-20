import { Component, OnInit } from '@angular/core';
import { AuthUserService }   from '../../../services/auth/auth-user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public year = new Date().getFullYear();

  constructor(private auth: AuthUserService) { }

  ngOnInit() {
  }

  public loginGoogle() {
    this.auth.signIn();
  }

}
