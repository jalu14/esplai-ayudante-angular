import { Injectable }  from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable }  from 'rxjs';

@Injectable()
export class ApiService {

  private baseUrl = environment.api.url;

  constructor(private http: HttpClient) {
  }

  public get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + '/' + url);
  }
}
