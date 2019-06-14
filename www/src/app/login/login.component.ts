import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    rememberMe: false,
  });

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private api: ApiService,
    private auth: AuthService,
    private user: UserService,
    private router: Router) { }

  async onSubmit() {
    try {
      let snackBarRef = this.snackBar.open('Logging in...');
      const res: any = await this.api.user.login(this.loginForm.value.username, this.loginForm.value.password);
      this.auth.saveAuth(res.token, this.loginForm.value.rememberMe);
      this.user.login(res);
      snackBarRef.dismiss();
      this.router.navigate(['/']);
    } catch (ex) {
      let msg = "Request failed. Please check your network and try again."
      if (ex.error.message) msg = ex.error.message;
      this.snackBar.open(msg, null, { duration: 3000 });
    }
  }
}
