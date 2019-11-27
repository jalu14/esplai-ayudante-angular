import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MemberEntity }      from '../../../core/entities';
import { ModalFactory }      from '../../../services/modal/modal.factory';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  public member: MemberEntity = {
    id: 1,
    createdBy: 'Javi',
    createdDate: '21-11-2019',
    givenName: 'Javi',
    middleName: 'Luna',
    surName: 'Garvinicio',
    gender: 'male',
    currentBranch: 5,
    isInstructor: true,
    birthDate: '24-03-1996',
    description: '',
    documentList: [
      {id: 1, name: 'Carta alfa', ok: false},
      {id: 2, name: 'Inscripción', ok: true},
    ]
  };

  public allergyList = [
    {id: 1, name: 'Plátano'}
  ];

  private memberId: number;

  constructor(private route: ActivatedRoute,
              private modal: ModalFactory) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.memberId = params.id;
    });
  }

  public delete() {
    this.modal.confirm('error', 'borrar')
      .subscribe(res => console.log(res));
  }
}
