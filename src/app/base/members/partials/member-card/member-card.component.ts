import { Component, Input, OnInit } from '@angular/core';
import { MemberEntity }             from '../../../../core/entities';

@Component({
  selector: 'member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  @Input() public member: MemberEntity;

  constructor() { }

  ngOnInit() {
  }

}
