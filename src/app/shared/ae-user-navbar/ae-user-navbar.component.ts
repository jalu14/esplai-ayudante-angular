import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'ae-user-navbar',
  templateUrl: './ae-user-navbar.component.html',
  styleUrls: ['./ae-user-navbar.component.scss']
})
export class AeUserNavbarComponent implements OnInit {

  @HostListener('window:keydown.escape', [])
  keyDown() {
    this.dropdownActive = false;
  }

  public dropdownActive = false;

  constructor() { }

  ngOnInit() {
  }

}
