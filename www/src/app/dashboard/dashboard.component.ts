import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    public user: UserService,
    private router: Router,
    private api: ApiService,
    private snackBar: MatSnackBar
  ) {

  }

  ngOnInit() {
    if (!this.user.authenticated) this.router.navigate(['/login']);
  }

  async getPassword(account) {
    try {
      let snackBarRef = this.snackBar.open('Loading password...');
      const res: any = await this.api.account.getPassword(account._id);
      account.tmpPassword = res.password;
      snackBarRef.dismiss();
      // delete in 1 minute
      setTimeout(() => {
        try {
          delete account.tmpPassword;
        } catch (ex) { }
      }, 60 * 1000)
    } catch (ex) {
      let msg = "Request failed. Please check your network and try again."
      if (ex.error.message) msg = ex.error.message;
      this.snackBar.open(msg, null, { duration: 3000 });
    }
  }

  canEdit(account) {
    return account.createdBy === this.user.profile._id;
  }

  logout() {
    this.user.logout();
  }

}
