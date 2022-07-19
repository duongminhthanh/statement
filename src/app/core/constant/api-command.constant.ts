import {environment} from 'src/environments/environment';


export const BaseURL = {
    API_AUTH: environment.STATEMENT_SERVICE + 'auth',
    API_DEPARTMENT: environment.STATEMENT_SERVICE + 'department',
    API_GROUP: environment.STATEMENT_SERVICE + 'group',
    API_USER: environment.STATEMENT_SERVICE + 'user',
    API_IMPORT: environment.STATEMENT_SERVICE + 'import',
    API_REPORT: environment.STATEMENT_SERVICE + 'report',
    API_UNIT: environment.STATEMENT_SERVICE + 'unit',
    API_USERDEMO: environment.STATEMENT_SERVICE + 'userdemo',
    API_AUTH2: environment.STATEMENT_SERVICE + 'auth2',

};
