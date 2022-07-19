import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CommandURL} from '../../commands/api.command';
import {BaseApiService} from '../../helpers/base-api.service';
@Injectable({
  providedIn: 'root'
})
export class User2Service {
  constructor(
    private baseApiService: BaseApiService,
    private http: HttpClient
) {
}

getUserList(payload: any) {
    return this.baseApiService.postJson(CommandURL.GET_USER_2_PAGING, payload);
}

createUserDemo(payload: any) {
    return this.baseApiService.postJson(CommandURL.CREATE_USER_2, payload);
}

updateUserDemo(payload: any) {
    return this.baseApiService.postJson(CommandURL.UPDATE_USER_2, payload);
}

deleteUserDemo(payload: any) {
    return this.baseApiService.postJson(CommandURL.DELETE_USER_2, payload);
}

importUsers(payload: FormData) {
    return this.http.post<any>(CommandURL.IMPORT_USERS_2,
        payload,
        {headers: {'Other-Content-Type': 'yes'}}
    );
}
}
