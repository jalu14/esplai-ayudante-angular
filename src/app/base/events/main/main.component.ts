import { Component, OnInit } from '@angular/core';
import { CreateEventModal }  from '../modals/create-event.modal';
import { ModalFactory }      from '../../../services/modal/modal.factory';
import { ModalResponse }     from '../../../core/models';
import { EventEntity }       from '../../../core/entities';

@Component({
  selector: 'ae-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  public eventList: EventEntity[] = [
    {
      id: 1,
      startDate: '21-12-2019',
      endDate: '22-12-2019',
      attendantList: [],
      createdBy: 'jalu',
      createdDate: '19-11-2019',
      description: 'Una fum fum normal en la marinada, ok no',
      endsSameDay: false,
      isPublic: false,
      managerList: [{ name: 'Javi' }, { name: 'Javi' }, { name: 'Javi' }, { name: 'Javi' }],
      name: 'Fum fum',
      taskList: [],
    },
    {
      id: 2,
      startDate: '21-12-2019',
      endDate: '22-12-2019',
      attendantList: [],
      createdBy: 'jalu',
      createdDate: '19-11-2019',
      description: 'Una fum fum normal en la marinada, ok no',
      endsSameDay: false,
      isPublic: true,
      managerList: [{ name: 'Javi' }, { name: 'Javi' }, { name: 'Javi' }, { name: 'Javi' }],
      name: 'Fum fum',
      taskList: [],
    },
    {
      id: 3,
      startDate: '21-12-2019',
      endDate: '22-12-2019',
      attendantList: [],
      createdBy: 'jalu',
      createdDate: '19-11-2019',
      description: 'Una fum fum normal en la marinada, ok no',
      endsSameDay: false,
      isPublic: true,
      managerList: [{ name: 'Javi' }, { name: 'Javi' }, { name: 'Javi' }, { name: 'Javi' }],
      name: 'Fum fum',
      taskList: [],
    },
    {
      id: 4,
      startDate: '21-12-2019',
      endDate: '22-12-2019',
      attendantList: [],
      createdBy: 'jalu',
      createdDate: '19-11-2019',
      description: 'Una fum fum normal en la marinada, ok no',
      endsSameDay: false,
      isPublic: true,
      managerList: [{ name: 'Javi' }, { name: 'Javi' }, { name: 'Javi' }, { name: 'Javi' }],
      name: 'Fum fum',
      taskList: [],
    },
  ];
  public loading = false;

  constructor(private modal: ModalFactory) {
  }

  ngOnInit() {
  }

  public createNewEvent() {
    this.modal.custom(
      CreateEventModal,
      {
        params: null,
        size: 'sm',
        title: 'New event',
      },
      new EventEntity({ startDate: '15-11-2019' }),
    ).subscribe((res: ModalResponse) => {
      console.log(res);
    });
  }
}
