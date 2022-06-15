import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  post(url: string, body: any): Observable<any> {
    return this.http.post<any>(url, body);
  }

  get(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
