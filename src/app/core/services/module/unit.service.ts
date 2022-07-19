import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CommandURL} from '../../commands/api.command';
import {BaseApiService} from '../../helpers/base-api.service';

@Injectable({
    providedIn: 'root',
})
export class UnitService {
  
    constructor(
        private baseApiService: BaseApiService,
        private http: HttpClient
    ) {
    }

    getUnitList(payload: any) {
        return this.baseApiService.postJson(CommandURL.GET_UNIT_PAGING, payload);
    }

    createUnit(payload: any) {
        return this.baseApiService.postJson(CommandURL.CREATE_UNIT, payload);
    }

    updateUnit(payload: any) {
        return this.baseApiService.postJson(CommandURL.UPDATE_UNIT, payload);
    }

    deleteUnit(payload: any) {
        return this.baseApiService.postJson(CommandURL.DELETE_UNIT, payload);
    }

    exportListUnit(json: any) {
        return this.http.post(CommandURL.EXPORT_UNIT, json,{
            responseType: 'arraybuffer',
            headers: new HttpHeaders(),
        });
    }

    importUnits(payload: FormData) {
        return this.http.post<any>(CommandURL.IMPORT_UNITS,
            payload,
            {headers: {'Other-Content-Type': 'yes'}}
        );
    }
}


