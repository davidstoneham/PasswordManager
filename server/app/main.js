(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxPQUFPO0VBQ1Asa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNoaXBwaW5nLWNhcmQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb2wge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"accountForm\" novalidate (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>{{isEditing?'Edit Account':'Create Account'}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Name\" formControlName=\"name\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Login\" formControlName=\"login\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Password\" formControlName=\"password\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Description\" formControlName=\"description\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          Access\n          <ng-container formArrayName=\"access\">\n            <div *ngFor=\"let user of user.allUsers; let i = index\">\n              <mat-checkbox [value]=\"user._id\" [formControlName]=\"i\">\n                {{user.username}}\n              </mat-checkbox>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n      <a mat-raised-button type=\"button\" routerLink=\"/\">Cancel</a>\n    </mat-card-actions>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var AccountComponent = /** @class */ (function () {
    function AccountComponent(fb, api, user, router, route, snackBar) {
        this.fb = fb;
        this.api = api;
        this.user = user;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.accountForm = this.fb.group({
            _id: [null],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            login: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null],
            description: null,
            access: this.fb.array([])
        });
        this.isEditing = false;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setAccess();
        this.sub = this.route.params.subscribe(function (params) {
            _this.getItemToEdit(params['id']);
        });
    };
    AccountComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AccountComponent.prototype.getItemToEdit = function (id) {
        var _this = this;
        if (!id)
            return;
        this.isEditing = true;
        var editingAccount = this.user.accounts.find(function (account) { return account._id === id; });
        if (!editingAccount)
            return this.router.navigate(['/']);
        Object.keys(editingAccount).forEach(function (k) {
            var control = _this.accountForm.get(k);
            if (control)
                control.setValue(editingAccount[k], { onlySelf: true });
        });
        this.setAccess(editingAccount);
    };
    AccountComponent.prototype.setAccess = function (editingAccount) {
        var _this = this;
        var formArray = this.accountForm.get('access');
        while (formArray.length)
            formArray.removeAt(0);
        this.user.allUsers.forEach(function (x) {
            var checked = false;
            var disabled = false;
            if (editingAccount) {
                var hasAccess = editingAccount.permissions.find(function (p) { return p.user === x._id; });
                checked = !!hasAccess;
            }
            if (x._id === _this.user.profile._id) {
                checked = true;
                disabled = true;
            }
            formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: checked, disabled: disabled }));
        });
    };
    AccountComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var payload, i, snackBarRef, res, i, ex_1, msg;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        payload = JSON.parse(JSON.stringify(this.accountForm.getRawValue()));
                        for (i = 0; i < payload.access.length; i++) {
                            if (payload.access[i])
                                payload.access[i] = this.user.allUsers[i]._id;
                            else
                                payload.access.splice(i--, 1);
                        }
                        snackBarRef = this.snackBar.open((this.isEditing ? 'Updating' : 'Creating') + " account...");
                        res = void 0;
                        if (!this.isEditing) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.api.account.update(payload)];
                    case 1:
                        res = _a.sent();
                        for (i = 0; i < this.user.accounts.length; i++) {
                            if (this.user.accounts[i]._id === res._id) {
                                this.user.accounts[i] = res;
                                break;
                            }
                        }
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.api.account.create(payload)];
                    case 3:
                        res = _a.sent();
                        this.user.accounts.push(res);
                        _a.label = 4;
                    case 4:
                        snackBarRef.dismiss();
                        this.router.navigate(['/']);
                        return [3 /*break*/, 6];
                    case 5:
                        ex_1 = _a.sent();
                        console.log(ex_1);
                        msg = "Request failed. Please check your network and try again.";
                        if (ex_1.error && ex_1.error.message)
                            msg = ex_1.error.message;
                        this.snackBar.open(msg, null, { duration: 3000 });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");







var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'addAccount', component: _account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"] },
    { path: 'editAccount/:id', component: _account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'web-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_17__["AccountComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                _services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n  <h1 class=\"mat-h1\">\n    Dashboard\n\n    <button *ngIf=\"user.profile\" mat-flat-button [matMenuTriggerFor]=\"menu\" color=\"primary\"\n      style=\"float: right\">{{user.profile.username}}</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"logout()\">Logout</button>\n    </mat-menu>\n  </h1>\n\n  <mat-accordion>\n    <mat-expansion-panel *ngFor=\"let account of user.accounts\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          {{account.name}}\n        </mat-panel-title>\n        <mat-panel-description>\n          {{account.login}}\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <p *ngIf=\"account.description\">{{account.description}}</p>\n      <p *ngIf=\"account.tmpPassword\">password: {{account.tmpPassword}}</p>\n      <p *ngIf=\"!account.tmpPassword\">\n        <button mat-raised-button color=\"primary\" (click)=\"getPassword(account)\">\n          Get Password\n        </button>\n      </p>\n      <a *ngIf=\"canEdit(account)\" mat-raised-button [routerLink]=\"['/editAccount',account._id]\">\n        Edit\n      </a>\n\n    </mat-expansion-panel>\n\n  </mat-accordion>\n\n  <a mat-fab color=\"primary\" style=\"position: fixed;right: 10px; bottom: 10px;\" routerLink=\"/addAccount\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"add\">add</mat-icon>\n  </a>\n\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcRGF2aWRcXFByb2plY3RzXFxQYXNzd29yZE1hbmFnZXJcXHd3dy9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(user, router, api, snackBar) {
        this.user = user;
        this.router = router;
        this.api = api;
        this.snackBar = snackBar;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (!this.user.authenticated)
            this.router.navigate(['/login']);
    };
    DashboardComponent.prototype.getPassword = function (account) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var snackBarRef, res, ex_1, msg;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        snackBarRef = this.snackBar.open('Loading password...');
                        return [4 /*yield*/, this.api.account.getPassword(account._id)];
                    case 1:
                        res = _a.sent();
                        account.tmpPassword = res.password;
                        snackBarRef.dismiss();
                        // delete in 1 minute
                        setTimeout(function () {
                            try {
                                delete account.tmpPassword;
                            }
                            catch (ex) { }
                        }, 60 * 1000);
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        msg = "Request failed. Please check your network and try again.";
                        if (ex_1.error.message)
                            msg = ex_1.error.message;
                        this.snackBar.open(msg, null, { duration: 3000 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.canEdit = function (account) {
        return account.createdBy === this.user.profile._id;
    };
    DashboardComponent.prototype.logout = function () {
        this.user.logout();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGlwcGluZy1jYXJkIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Log In</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Username\" formControlName=\"username\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-checkbox formControlName=\"rememberMe\">Remember Me</mat-checkbox>\n        </div>\n      </div>\n    </mat-card-content>\n    <a routerLink=\"/signup\">Sign Up</a>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n    </mat-card-actions>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, snackBar, api, auth, user, router) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.api = api;
        this.auth = auth;
        this.user = user;
        this.router = router;
        this.loginForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rememberMe: false,
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var snackBarRef, res, ex_1, msg;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        snackBarRef = this.snackBar.open('Logging in...');
                        return [4 /*yield*/, this.api.user.login(this.loginForm.value.username, this.loginForm.value.password)];
                    case 1:
                        res = _a.sent();
                        this.auth.saveAuth(res.token, this.loginForm.value.rememberMe);
                        this.user.login(res);
                        snackBarRef.dismiss();
                        this.router.navigate(['/']);
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        msg = "Request failed. Please check your network and try again.";
                        if (ex_1.error.message)
                            msg = ex_1.error.message;
                        this.snackBar.open(msg, null, { duration: 3000 });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/user */ "./src/app/services/api/user.ts");
/* harmony import */ var _api_account__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/account */ "./src/app/services/api/account.ts");






var ApiService = /** @class */ (function () {
    function ApiService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.host = !Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() ? "/api/" : "http://localhost:1676/api/";
        this.account = new _api_account__WEBPACK_IMPORTED_MODULE_5__["default"](this);
        this.user = new _api_user__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    }
    ApiService.prototype.cacheControl = function (headers) {
        if (!headers)
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.set('Cache-control', 'no-cache');
        headers = headers.set('Cache-control', 'no-store');
        headers = headers.set('Expires', '0');
        headers = headers.set('Pragma', 'no-cache');
        return headers;
    };
    ApiService.prototype.get = function (url, headers, allowCache) {
        var _this = this;
        if (headers === void 0) { headers = null; }
        if (allowCache === void 0) { allowCache = false; }
        if (!allowCache)
            headers = this.cacheControl(headers);
        return new Promise(function (resolve, reject) {
            _this.http.get(url, { headers: headers })
                .subscribe(function (data) { return resolve(data); }, function (err) {
                _this.checkError(err);
                reject(err);
            });
        });
    };
    ApiService.prototype.put = function (url, payload, headers, allowCache) {
        var _this = this;
        if (headers === void 0) { headers = null; }
        if (allowCache === void 0) { allowCache = false; }
        if (!allowCache)
            headers = this.cacheControl(headers);
        return new Promise(function (resolve, reject) {
            _this.http.put(url, payload, { headers: headers })
                .subscribe(function (data) { return resolve(data); }, function (err) {
                _this.checkError(err);
                reject(err);
            });
        });
    };
    ApiService.prototype.post = function (url, payload, headers, allowCache) {
        var _this = this;
        if (headers === void 0) { headers = null; }
        if (allowCache === void 0) { allowCache = false; }
        if (!allowCache)
            headers = this.cacheControl(headers);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, payload, { headers: headers })
                .subscribe(function (data) { return resolve(data); }, function (err) {
                _this.checkError(err);
                reject(err);
            });
        });
    };
    ApiService.prototype.checkError = function (err) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])())
            console.log(err);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/api/account.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api/account.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var Account = /** @class */ (function () {
    function Account(api) {
        this.api = api;
    }
    Account.prototype.create = function (payload) {
        var url = this.api.host + 'account/create';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.post(url, payload, headers);
    };
    Account.prototype.update = function (payload) {
        var url = this.api.host + 'account/update';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.put(url, payload, headers);
    };
    Account.prototype.updatePermission = function (payload) {
        var url = this.api.host + 'account/updatePermission';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.put(url, payload, headers);
    };
    Account.prototype.getPassword = function (id) {
        var url = this.api.host + 'account/getPassword/' + id;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.get(url, headers);
    };
    Account.prototype.me = function () {
        var url = this.api.host + 'account/me';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.get(url, headers);
    };
    return Account;
}());
/* harmony default export */ __webpack_exports__["default"] = (Account);


/***/ }),

/***/ "./src/app/services/api/user.ts":
/*!**************************************!*\
  !*** ./src/app/services/api/user.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    User.prototype.changePassword = function (password, newPassword, twoFactor) {
        var url = this.api.host + 'user/changePassword';
        var payload = { password: password, newPassword: newPassword, twoFactor: twoFactor };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.put(url, payload, headers);
    };
    User.prototype.forgotPassword = function (email) {
        var url = this.api.host + 'user/requestReset/' + email;
        return this.api.get(url);
    };
    User.prototype.resetPassword = function (password, token) {
        var url = this.api.host + 'user/resetPassword';
        var payload = { password: password, token: token };
        return this.api.post(url, payload);
    };
    User.prototype.login = function (username, password) {
        var url = this.api.host + 'user/login';
        var payload = { username: username, password: password };
        return this.api.post(url, payload);
    };
    User.prototype.createAccount = function (username, password) {
        var url = this.api.host + "user/create";
        var payload = { username: username, password: password };
        return this.api.post(url, payload);
    };
    User.prototype.current = function () {
        var url = this.api.host + "user/current";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.get(url, headers);
    };
    User.prototype.all = function () {
        var url = this.api.host + "user/all";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.get(url, headers);
    };
    return User;
}());
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.storage_auth = 'auth';
        this.storage_crossTab_auth = 'tab_auth';
        this.storage_crossTab = 'tab';
        this.askingForAuth = false;
        this.resetData();
        // listen for other tabs
        localStorage.removeItem(this.storage_crossTab_auth);
        window.addEventListener('storage', function (e) { return _this.onStorageEvent(e); });
        window.addEventListener('beforeunload', function (e) { return localStorage.removeItem(_this.storage_crossTab_auth); });
    }
    AuthService.prototype.onStorageEvent = function (e) {
        var _this = this;
        if (!event.isTrusted)
            return;
        // another tab is asking for auth
        if (e.key === this.storage_crossTab) {
            var auth = sessionStorage.getItem(this.storage_auth);
            if (auth) {
                localStorage.setItem(this.storage_crossTab_auth, auth);
                // make sure we delete it
                setTimeout(function () { return localStorage.removeItem(_this.storage_crossTab_auth); }, 1000);
            }
        }
        // auth has just been changed
        if (e.key === this.storage_crossTab_auth && this.askingForAuth) {
            var auth = localStorage.getItem(this.storage_crossTab_auth);
            if (auth) {
                this.askingForAuth = false;
                // save auth to session
                sessionStorage.setItem(this.storage_auth, auth);
                // delete from local
                localStorage.removeItem(this.storage_crossTab_auth);
                this.checkAuthenticated();
            }
        }
    };
    AuthService.prototype.resetData = function () {
        this.auth = {
            token: '',
            rememberMe: false,
        };
    };
    AuthService.prototype.checkAuthenticated = function () {
        // check local storage
        this.getAuthFromStorage(localStorage);
        // check session storage
        this.getAuthFromStorage(sessionStorage);
        // check if another tab is open
        this.askingForAuth = true;
        localStorage.setItem(this.storage_crossTab, Math.random().toString());
    };
    AuthService.prototype.getAuthFromStorage = function (storage) {
        var auth = storage.getItem(this.storage_auth);
        if (auth) {
            try {
                this.auth = JSON.parse(auth);
                return;
            }
            catch (ex) {
            }
        }
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.auth.token !== '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.logout = function () {
        this.resetData();
        localStorage.removeItem(this.storage_auth);
        sessionStorage.removeItem(this.storage_auth);
        this.router.navigate(['/login']);
    };
    AuthService.prototype.saveAuth = function (token, rememberMe) {
        // set auth data
        this.auth.rememberMe = rememberMe;
        this.auth.token = token;
        // save if remember me
        if (this.auth.rememberMe) {
            // save to local storage so it is persisted
            localStorage.setItem(this.storage_auth, JSON.stringify(this.auth));
            sessionStorage.removeItem(this.storage_auth);
        }
        else {
            // save to session storage so it only last while browser is open
            sessionStorage.setItem(this.storage_auth, JSON.stringify(this.auth));
            localStorage.removeItem(this.storage_auth);
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var UserService = /** @class */ (function () {
    function UserService(router, auth, api, snackBar) {
        this.router = router;
        this.auth = auth;
        this.api = api;
        this.snackBar = snackBar;
        this.loggedIn = false;
        this.accounts = [];
        this.allUsers = [];
        this.resetData();
        this.checkAuthenticated();
    }
    UserService.prototype.resetData = function () {
        this.profile = { _id: '' };
    };
    Object.defineProperty(UserService.prototype, "authenticated", {
        get: function () {
            if (!this.loggedIn && this.auth.authenticated) {
                this.loggedIn = true;
                this.getUserData();
            }
            return this.auth.authenticated;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (userData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var snackBarRef;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        snackBarRef = this.snackBar.open('Loading data...');
                        this.profile = userData;
                        return [4 /*yield*/, Promise.all([
                                this.loadMyAccounts(),
                                this.loadUsers()
                            ])];
                    case 1:
                        _a.sent();
                        snackBarRef.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.checkAuthenticated = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.auth.checkAuthenticated();
                return [2 /*return*/];
            });
        });
    };
    UserService.prototype.getUserData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, ex_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticated) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.api.user.current()];
                    case 2:
                        data = _a.sent();
                        this.login(data);
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        if (ex_1.status > 0)
                            this.logout();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.logout = function () {
        this.auth.logout();
        this.resetData();
    };
    UserService.prototype.loadMyAccounts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, ex_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.api.account.me()];
                    case 1:
                        _a.accounts = (_b.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        ex_2 = _b.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.loadUsers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, ex_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.api.user.all()];
                    case 1:
                        _a.allUsers = (_b.sent());
                        return [3 /*break*/, 3];
                    case 2:
                        ex_3 = _b.sent();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hpcHBpbmctY2FyZCB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNvbCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signupForm\" novalidate (ngSubmit)=\"onSubmit()\">\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Signup</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Username\" formControlName=\"username\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\">\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Confirm Password\" formControlName=\"confPassword\" type=\"password\">\n          </mat-form-field>\n        </div>\n      </div>\n    </mat-card-content>\n    <a routerLink=\"/login\">Login</a>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    </mat-card-actions>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, snackBar, api, auth, user, router) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.api = api;
        this.auth = auth;
        this.user = user;
        this.router = router;
        this.signupForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    SignupComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var snackBarRef, res, ex_1, msg;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // check password
                        if (this.signupForm.value.password.length < 8)
                            return [2 /*return*/, this.snackBar.open("Your password must be at least 8 characters", null, { duration: 3000 })];
                        if (this.signupForm.value.password !== this.signupForm.value.confPassword)
                            return [2 /*return*/, this.snackBar.open("The passwords you entered do not match", null, { duration: 3000 })];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        snackBarRef = this.snackBar.open('Creating account...');
                        return [4 /*yield*/, this.api.user.createAccount(this.signupForm.value.username, this.signupForm.value.password)];
                    case 2:
                        res = _a.sent();
                        this.auth.saveAuth(res.token, false);
                        this.user.login(res);
                        snackBarRef.dismiss();
                        this.router.navigate(['/']);
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        msg = "Request failed. Please check your network and try again.";
                        if (ex_1.error.message)
                            msg = ex_1.error.message;
                        this.snackBar.open(msg, null, { duration: 3000 });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\David\Projects\PasswordManager\www\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map