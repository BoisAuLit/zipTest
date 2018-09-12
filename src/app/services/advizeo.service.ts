import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const advizeoRootUri = 'https://api-dev.advizeo.io/api';

@Injectable({
  providedIn: 'root'
})
export class AdvizeoService {
  constructor(public http: HttpClient) {
  }

  private static accessToken: string;
  private static userUid: string;

  public authenticate(emailInput: string, passwordInput: string): Promise<any> {

    return new Promise((resolve, reject) => {

      const email = btoa(emailInput);
      const password = btoa(passwordInput);

      this.post('/authenticate', {user: {email, password}})
        .toPromise()
        .then(res => {

          console.log('authentification okay', res);

          if (res.status === 'OK') {
            AdvizeoService.userUid = res.user.id;
            AdvizeoService.accessToken = res.access_token;
          }
          resolve();
        })
        .catch(cause => {

          console.log('authentification failed', cause);

          AdvizeoService.userUid = null;
          AdvizeoService.accessToken = null;
          reject(cause);
        });

    });
  }

  private getOptions(headers?: HttpHeaders, params?): HttpHeaders {
    if (!headers) {
      headers = new HttpHeaders();
    }

    if (AdvizeoService.accessToken) {
      headers = headers.set('Authorization', `Bearer ${AdvizeoService.accessToken}`);
    }
    if (AdvizeoService.userUid) {
      headers = headers.set('UserUid', AdvizeoService.userUid);
    }
    return headers;
  }

  get(route: string, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    headers = this.getOptions(headers, params);
    return this.http.get(advizeoRootUri + route, {headers, params});
  }

  put(route: string, body: any, headers?: HttpHeaders): Observable<any> {
    headers = this.getOptions(headers);
    return this.http.put(advizeoRootUri + route, body, {headers});
  }

  post(route: string, body: any, headers?: HttpHeaders): Observable<any> {
    headers = this.getOptions(headers);
    return this.http.post(advizeoRootUri + route, body, {headers});
  }

  delete(route: string, body: any, headers?: HttpHeaders): Observable<any> {
    headers = this.getOptions(headers);
    return this.http.delete(advizeoRootUri + route, {headers});
  }

  patch(route: string, body: any, headers?: HttpHeaders): Observable<any> {
    headers = this.getOptions(headers);
    return this.http.patch(advizeoRootUri + route, body, {headers});
  }
}
