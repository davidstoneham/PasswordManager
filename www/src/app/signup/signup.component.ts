import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    confPassword: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private api: ApiService,
    private auth: AuthService,
    private user: UserService,
    private router: Router
  ) { }

  async onSubmit() {
    // check password
    if (this.signupForm.value.password.length < 8)
      return this.snackBar.open("Your password must be at least 8 characters", null, { duration: 3000 });
    if (this.signupForm.value.password !== this.signupForm.value.confPassword)
      return this.snackBar.open("The passwords you entered do not match", null, { duration: 3000 });

    //create account
    try {
      let snackBarRef = this.snackBar.open('Creating account...');
      const res: any = await this.api.user.createAccount(this.signupForm.value.username, this.signupForm.value.password);
      this.auth.saveAuth(res.token, false);
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
