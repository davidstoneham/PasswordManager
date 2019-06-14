import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ApiService } from './api.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UserService {
  public profile: { _id: string };
  private loggedIn: boolean = false;

  public accounts = [];
  public allUsers = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private api: ApiService,
    private snackBar: MatSnackBar
  ) {
    this.resetData();
    this.checkAuthenticated();
  }

  resetData() {
    this.profile = { _id: '' };
  }

  get authenticated() {
    if (!this.loggedIn && this.auth.authenticated) {
      this.loggedIn = true;
      this.getUserData();
    }
    return this.auth.authenticated;
  }

  public async login(userData) {
    let snackBarRef = this.snackBar.open('Loading data...');
    this.profile = userData;
    await Promise.all([
      this.loadMyAccounts(),
      this.loadUsers()
    ])
    snackBarRef.dismiss();
  }

  async checkAuthenticated() {
    this.auth.checkAuthenticated();
  }

  private async getUserData() {
    if (this.authenticated) {
      try {
        let data: any = await this.api.user.current();
        this.login(data);
      } catch (ex) {
        if (ex.status > 0) this.logout();
      }
    }
  }

  public logout() {
    this.auth.logout();
    this.resetData();
  }

  private async loadMyAccounts() {
    try {
      this.accounts = await this.api.account.me() as any;
    } catch (ex) {
    }
  }

  private async loadUsers() {
    try {
      this.allUsers = await this.api.user.all() as any;
    } catch (ex) {
    }
  }


}

