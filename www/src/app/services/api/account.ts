import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';

export default class Account {
    api: ApiService;

    constructor(api: ApiService) {
        this.api = api;
    }

    public create(payload: object) {
        let url = this.api.host + 'account/create';
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.post(url, payload, headers);
    }

    public update(payload: object) {
        let url = this.api.host + 'account/update';
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.put(url, payload, headers);
    }

    public updatePermission(payload: object) {
        let url = this.api.host + 'account/updatePermission';
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.put(url, payload, headers);
    }

    public getPassword(id: string) {
        let url = this.api.host + 'account/getPassword/' + id;
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.get(url, headers);
    }

    public me() {
        let url = this.api.host + 'account/me';
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.api.authService.auth.token });
        return this.api.get(url, headers);
    }

}