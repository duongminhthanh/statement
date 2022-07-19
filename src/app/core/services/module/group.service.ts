import { Injectable } from '@angular/core';
import { CommandURL } from '../../commands/api.command';
import { BaseApiService } from '../../helpers/base-api.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private baseApiService: BaseApiService,
  ) { }

  getGroupList(payload: any) {
    return this.baseApiService.postJson(CommandURL.GET_GROUP_PAGING, payload);
  }

  createGroup(payload: any) {
    return this.baseApiService.postJson(CommandURL.CREATE_GROUP, payload);
  }

  updateGroup(payload: any) {
    return this.baseApiService.postJson(CommandURL.UPDATE_GROUP, payload);
  }

  deleteGroup(payload: any) {
    return this.baseApiService.postJson(CommandURL.DELETE_GROUP, payload);
  }
}
