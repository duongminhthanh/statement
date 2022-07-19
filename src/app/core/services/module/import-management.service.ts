import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CommandURL} from '../../commands/api.command';
import {BaseApiService} from '../../helpers/base-api.service';

@Injectable({
    providedIn: 'root',
})
export class ImportManagementService {
    constructor(
        private baseApiService: BaseApiService,
        private http: HttpClient
    ) {
    }

    getFileList(payload: any) {
        return this.baseApiService.postJson(CommandURL.GET_FILE_PAGING, payload);
    }

    importBankStatements(payload: FormData) {
        return this.http.post<any>(CommandURL.IMPORT_BANK_STATEMENT,
            payload,
            {headers: {'Other-Content-Type': 'yes'}}
        );
    }

    exportBankStatements(bankStatement: {}) {
        return this.http.post(CommandURL.EXPORT_BANK_STATEMENT, bankStatement, {
            responseType: 'arraybuffer', headers: new HttpHeaders()
        });
    }

    signBankStatements(bankStatement: any) {
        return this.http.post(CommandURL.SIGN_BANK_STATEMENT, bankStatement, {
            responseType: 'arraybuffer', headers: new HttpHeaders()
        });
    }
}
