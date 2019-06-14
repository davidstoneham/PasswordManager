import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import User from './api/user'
import Account from './api/account'

@Injectable()
export class ApiService {
  public host = !isDevMode() ? "/api/" : "http://localhost:1676/api/";

  public account = new Account(this);
  public user = new User(this);

  constructor(
    private http: HttpClient,
    public authService: AuthService,
  ) {
  }

  public cacheControl(headers: HttpHeaders) {
    if (!headers) headers = new HttpHeaders();
    headers = headers.set('Cache-control', 'no-cache');
    headers = headers.set('Cache-control', 'no-store');
    headers = headers.set('Expires', '0');
    headers = headers.set('Pragma', 'no-cache');
    return headers;
  }

  public get(url: string, headers: HttpHeaders = null, allowCache: boolean = false) {
    if (!allowCache) headers = this.cacheControl(headers)
    return new Promise((resolve, reject) => {
      this.http.get<{}>(url, { headers: headers })
        .subscribe(
          data => resolve(data),
          err => {
            this.checkError(err);
            reject(err)
          });
    })
  }

  public put(url: string, payload: any, headers: HttpHeaders = null, allowCache: boolean = false) {
    if (!allowCache) headers = this.cacheControl(headers)
    return new Promise((resolve, reject) => {
      this.http.put<any>(url, payload, { headers: headers })
        .subscribe(
          data => resolve(data),
          err => {
            this.checkError(err);
            reject(err)
          });
    })
  }

  public post(url: string, payload: any, headers: HttpHeaders = null, allowCache: boolean = false) {
    if (!allowCache) headers = this.cacheControl(headers)
    return new Promise((resolve, reject) => {
      this.http.post<{ message: string }>(url, payload, { headers: headers })
        .subscribe(
          data => resolve(data),
          err => {
            this.checkError(err);
            reject(err)
          });
    })
  }

  public checkError(err) {
    if (isDevMode()) console.log(err);
  }

}