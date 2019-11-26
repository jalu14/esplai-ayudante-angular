import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';
import { MemberEntity }      from '../../../core/entities';

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
  };

  public allergyList = [
    {id: 1, name: 'Plátano'}
  ];

  private memberId: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.memberId = params.id;
    });
  }
}
