import { Component, OnInit } from '@angular/core';
import { ModalFactory }      from '../../../services/modal/modal.factory';

@Component({
  selector: 'ae-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public loading = false;


  constructor(private modal: ModalFactory) {
  }

  ngOnInit() {
  }

}
