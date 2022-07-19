import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CommandURL} from '../../commands/api.command';
import {BaseApiService} from '../../helpers/base-api.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(
        private baseApiService: BaseApiService,
        private http: HttpClient
    ) {
    }

    getUserList(payload: any) {
        return this.baseApiService.postJson(CommandURL.GET_USER_PAGING, payload);
    }

    createUser(payload: any) {
        return this.baseApiService.postJson(CommandURL.CREATE_USER, payload);
    }

    updateUser(payload: any) {
        return this.baseApiService.postJson(CommandURL.UPDATE_USER, payload);
    }

    deleteUser(payload: any) {
        return this.baseApiService.postJson(CommandURL.DELETE_USER, payload);
    }

    importUsers(payload: FormData) {
        return this.http.post<any>(CommandURL.IMPORT_USERS,
            payload,
            {headers: {'Other-Content-Type': 'yes'}}
        );
    }

}
