import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api.service';

export default class User {
    api: ApiService;

    constructor(api: ApiService) {
        this.api = api;
    }

    public changePassword(password: string, newPassword: string, twoFactor: string) {
        let url = this.api.host + 'user/changePassword';
        let payload = { password, newPassword, twoFactor };
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.put(url, payload, headers);
    }

    public forgotPassword(email: string) {
        let url = this.api.host + 'user/requestReset/' + email;
        return this.api.get(url);
    }

    public resetPassword(password: string, token: string) {
        let url = this.api.host + 'user/resetPassword';
        let payload = { password, token };
        return this.api.post(url, payload);
    }

    public login(username: string, password: string) {
        let url = this.api.host + 'user/login';
        let payload = { username, password };
        return this.api.post(url, payload);
    }

    public createAccount(username: string, password: string) {
        let url = `${this.api.host}user/create`;
        let payload = { username, password };
        return this.api.post(url, payload);
    }

    public current() {
        let url = `${this.api.host}user/current`;
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.get(url, headers);
    }


    public all() {
        let url = `${this.api.host}user/all`;
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.get(url, headers);
    }

}