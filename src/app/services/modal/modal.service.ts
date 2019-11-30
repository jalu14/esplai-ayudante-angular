import {Injectable}          from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { ModalResponse }     from '../../core/models';

@Injectable()
export class ModalService {

  private openModal: Subject<{modal: any, type: string}> = new Subject<any>();
  private response: Subject<any>[] = [];
  private closeModal: Subject<any> = new Subject<any>();

  public open(type: string, modal: any) {
    this.openModal.next({modal, type: type});
    this.response.push(new Subject<any>());
    return this.response[this.response.length - 1].asObservable();
  };

  public getModal(): Observable<any> {
    return this.openModal.asObservable();
  }

  public getResponse(): Observable<any> {
    return this.closeModal.asObservable();
  }

  public close(response: ModalResponse) {
    const responsePopup: Subject<any> = this.response[this.response.length - 1];
    this.response.pop();
    this.closeModal.next();
    if (responsePopup) {
      responsePopup.next(response);
    }
  }

  public closeAll() {
    if (this.response.length) {
      this.response.forEach((subject: Subject<any>) => {
        if (!subject.closed) {
          subject.complete();
        }
      });
      this.close(undefined);
    }
  }
}
