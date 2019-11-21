import { Component, OnInit } from '@angular/core';
import { MemberEntity }      from '../../../core/entities';
import { CreateMemberModal } from '../modals/create-member.modal';
import { ModalFactory }      from '../../../services/modal/modal.factory';

@Component({
  selector: 'ae-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  public loading = false;
  public memberList: MemberEntity[] = [
    {
      id: 1,
      createdBy: 'Javi',
      createdDate: '21-11-2019',
      givenName: 'Javi',
      middleName: 'Luna',
      surName: 'G.',
      birthDate: '24-03-1996',
      description: '',
    },
  ];

  constructor(private modal: ModalFactory) {
  }

  ngOnInit() {
  }

  public createMemberModal() {
    this.modal.custom(
      CreateMemberModal,
      { size: 'md', title: 'Create member', params: {} },
      new MemberEntity({}),
    );
  }

}
