import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accountForm = this.fb.group({
    _id: [null],
    name: [null, Validators.required],
    login: [null, Validators.required],
    password: [null],
    description: null,
    access: this.fb.array([])
  });

  sub;

  isEditing: boolean = false;

  constructor(private fb: FormBuilder,
    private api: ApiService,
    public user: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.setAccess();
    this.sub = this.route.params.subscribe(params => {
      this.getItemToEdit(params['id']);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getItemToEdit(id) {
    if (!id) return;
    this.isEditing = true;
    let editingAccount = this.user.accounts.find((account) => { return account._id === id });
    if (!editingAccount) return this.router.navigate(['/'])
    Object.keys(editingAccount).forEach(k => {
      let control = this.accountForm.get(k);
      if (control) control.setValue(editingAccount[k], { onlySelf: true });
    });
    this.setAccess(editingAccount);
  }

  setAccess(editingAccount?) {
    let formArray = this.accountForm.get('access') as FormArray;
    while (formArray.length) formArray.removeAt(0);
    this.user.allUsers.forEach(x => {
      let checked = false;
      let disabled = false;
      if (editingAccount) {
        let hasAccess = editingAccount.permissions.find(p => { return p.user === x._id })
        checked = !!hasAccess;
      }
      if (x._id === this.user.profile._id) {
        checked = true;
        disabled = true;
      }
      formArray.push(new FormControl({ value: checked, disabled: disabled }))
    });
  }

  async onSubmit() {
    try {
      // set users permission
      let payload = JSON.parse(JSON.stringify(this.accountForm.getRawValue()));
      for (let i = 0; i < payload.access.length; i++) {
        if (payload.access[i]) payload.access[i] = this.user.allUsers[i]._id;
        else payload.access.splice(i--, 1);
      }
      // send to server
      let snackBarRef = this.snackBar.open(`${this.isEditing ? 'Updating' : 'Creating'} account...`);
      let res;
      if (this.isEditing) {
        res = await this.api.account.update(payload);
        for (let i = 0; i < this.user.accounts.length; i++) {
          if (this.user.accounts[i]._id === res._id) {
            this.user.accounts[i] = res;
            break;
          }
        }
      } else {
        res = await this.api.account.create(payload);
        this.user.accounts.push(res);
      }
      snackBarRef.dismiss();
      this.router.navigate(['/']);
    } catch (ex) {
      console.log(ex);
      let msg = "Request failed. Please check your network and try again."
      if (ex.error && ex.error.message) msg = ex.error.message;
      this.snackBar.open(msg, null, { duration: 3000 });
    }
  }
}
