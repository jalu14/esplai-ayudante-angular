import { Component, OnInit } from '@angular/core';
import { CreateEventModal }  from '../modals/create-event/create-event.modal';
import { ModalFactory }      from '../../../services/modal/modal.factory';
import { ModalResponse }     from '../../../core/models';
import { EventEntity }       from '../../../core/entities';

@Component({
  selector: 'ae-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public eventList: any[] = [];
  public loading = false;

  constructor(private modal: ModalFactory) {
  }

  ngOnInit() {
    this.createNewEvent();
  }

  public createNewEvent() {
    this.modal.custom(
      CreateEventModal,
      {
        params: null,
        size: 'sm',
        title: 'New event'
      },
      new EventEntity({startDate: '15-11-2019'})
    ).subscribe((res: ModalResponse) => {
      console.log(res);
    })
  }
}
