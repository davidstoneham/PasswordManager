import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  readonly storage_auth = 'auth';
  readonly storage_crossTab_auth = 'tab_auth';
  readonly storage_crossTab = 'tab';

  private askingForAuth: boolean = false;

  public auth: Auth;

  constructor(
    private router: Router,
  ) {
    this.resetData();
    // listen for other tabs
    localStorage.removeItem(this.storage_crossTab_auth)
    window.addEventListener('storage', (e) => this.onStorageEvent(e));
    window.addEventListener('beforeunload', (e) => localStorage.removeItem(this.storage_crossTab_auth));
  }

  onStorageEvent(e) {
    if (!event.isTrusted) return;
    // another tab is asking for auth
    if (e.key === this.storage_crossTab) {
      let auth = sessionStorage.getItem(this.storage_auth)
      if (auth) {
        localStorage.setItem(this.storage_crossTab_auth, auth);
        // make sure we delete it
        setTimeout(() => localStorage.removeItem(this.storage_crossTab_auth), 1000);
      }
    }
    // auth has just been changed
    if (e.key === this.storage_crossTab_auth && this.askingForAuth) {
      let auth = localStorage.getItem(this.storage_crossTab_auth)
      if (auth) {
        this.askingForAuth = false;
        // save auth to session
        sessionStorage.setItem(this.storage_auth, auth);
        // delete from local
        localStorage.removeItem(this.storage_crossTab_auth);
        this.checkAuthenticated();
      }
    }
  }

  resetData() {
    this.auth = {
      token: '',
      rememberMe: false,
    }
  }

  checkAuthenticated() {
    // check local storage
    this.getAuthFromStorage(localStorage);
    // check session storage
    this.getAuthFromStorage(sessionStorage);
    // check if another tab is open
    this.askingForAuth = true;
    localStorage.setItem(this.storage_crossTab, Math.random().toString());
  }

  getAuthFromStorage(storage) {
    let auth: any = storage.getItem(this.storage_auth);
    if (auth) {
      try {
        this.auth = JSON.parse(auth);
        return;
      } catch (ex) {
      }
    }
  }

  get authenticated(): boolean {
    return this.auth.token !== '';
  }

  public logout() {
    this.resetData();
    localStorage.removeItem(this.storage_auth);
    sessionStorage.removeItem(this.storage_auth);
    this.router.navigate(['/login']);
  }

  saveAuth(token: string, rememberMe: boolean) {
    // set auth data
    this.auth.rememberMe = rememberMe;
    this.auth.token = token;
    // save if remember me
    if (this.auth.rememberMe) {
      // save to local storage so it is persisted
      localStorage.setItem(this.storage_auth, JSON.stringify(this.auth));
      sessionStorage.removeItem(this.storage_auth);
    } else {
      // save to session storage so it only last while browser is open
      sessionStorage.setItem(this.storage_auth, JSON.stringify(this.auth));
      localStorage.removeItem(this.storage_auth);
    }
  }

}

interface Auth {
  token: string,
  rememberMe: boolean
}
