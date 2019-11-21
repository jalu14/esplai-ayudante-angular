import { Component, OnInit } from '@angular/core';
import { EventEntity }       from '../../../core/entities';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public event: EventEntity;
  public isLoading: boolean = true;

  private eventId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.eventId = params.id;
    });
  }

}
