import { Component, OnInit } from '@angular/core';
import { ApiService }        from '../../../../services/api/api.service';
import { finalize }          from 'rxjs/operators';

@Component({
  selector: 'users-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public userList: any[];
  public isLoading: boolean = false;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.isLoading = true;
    this.api.get('users')
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (res) => {
          this.userList = res
        },
        () => {
        }
      )
  }

}
