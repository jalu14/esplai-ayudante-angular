import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ae-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public eventList: any[] = [];
  public loading = false;

  constructor() { }

  ngOnInit() {
  }

}
