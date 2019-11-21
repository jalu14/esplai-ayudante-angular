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
      gender: 'male',
      currentBranch: 5,
      isInstructor: true,
      birthDate: '24-03-1996',
      description: '',
    },
    {
      id: 2,
      createdBy: 'Javi',
      createdDate: '21-11-2019',
      givenName: 'Jujulia',
      middleName: 'Shazama',
      surName: 'Reverter',
      gender: 'female',
      currentBranch: 2,
      isInstructor: true,
      birthDate: '01-01-1999',
      description: '',
    },

    {
      id: 2,
      createdBy: 'Javi',
      createdDate: '21-11-2019',
      givenName: 'Jujulia',
      middleName: 'Shazama',
      surName: 'Reverter',
      gender: 'female',
      currentBranch: 1,
      isInstructor: true,
      birthDate: '01-01-1999',
      description: '',
    },

    {
      id: 2,
      createdBy: 'Javi',
      createdDate: '21-11-2019',
      givenName: 'Jujulia',
      middleName: 'Shazama',
      surName: 'Reverter',
      gender: 'female',
      currentBranch: 3,
      isInstructor: true,
      birthDate: '01-01-1999',
      description: '',
    },

    {
      id: 2,
      createdBy: 'Javi',
      createdDate: '21-11-2019',
      givenName: 'Jujulia',
      middleName: 'Shazama',
      surName: 'Reverter',
      gender: 'female',
      currentBranch: 4,
      isInstructor: true,
      birthDate: '01-01-1999',
      description: '',
    },

    {
      id: 2,
      createdBy: 'Javi',
      createdDate: '21-11-2019',
      givenName: 'Jujulia',
      middleName: 'Shazama',
      surName: 'Reverter',
      gender: 'female',
      currentBranch: 6,
      isInstructor: true,
      birthDate: '01-01-1999',
      description: '',
    }
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
