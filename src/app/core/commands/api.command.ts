import {BaseURL} from '../constant/api-command.constant';


export class CommandURL {
  
    // Auth
    public static LOGIN = BaseURL.API_AUTH + '/login';
    
    // Department
    public static GET_DEPARTMENT_PAGING = BaseURL.API_DEPARTMENT + '/getDepartmentPaging';
    public static CREATE_DEPARTMENT = BaseURL.API_DEPARTMENT + '/createDepartment';
    public static UPDATE_DEPARTMENT = BaseURL.API_DEPARTMENT + '/updateDepartment';
    public static DELETE_DEPARTMENT = BaseURL.API_DEPARTMENT + '/deleteDepartment';
    public static IMPORT_DEPARTMENT = BaseURL.API_DEPARTMENT + '/importDepartment';
    public static EXPORT_DEPARTMENT = BaseURL.API_DEPARTMENT + '/exportDepartment';

    // Group
    public static GET_GROUP_PAGING = BaseURL.API_GROUP + '/getGroupPaging';
    public static CREATE_GROUP = BaseURL.API_GROUP + '/createGroup';
    public static UPDATE_GROUP = BaseURL.API_GROUP + '/updateGroup';
    public static DELETE_GROUP = BaseURL.API_GROUP + '/deleteGroup';

    // User
    public static GET_USER_PAGING = BaseURL.API_USER + '/getUserPaging';
    public static CREATE_USER = BaseURL.API_USER + '/createUser';
    public static UPDATE_USER = BaseURL.API_USER + '/updateUser';
    public static DELETE_USER = BaseURL.API_USER + '/deleteUser';
    public static IMPORT_USERS = BaseURL.API_USER + '/importUser';

    // Bank Statement
    public static GET_FILE_PAGING = BaseURL.API_IMPORT + '/getFileListPaging';
    public static IMPORT_BANK_STATEMENT = BaseURL.API_IMPORT + '/importBankStatement';
    public static EXPORT_BANK_STATEMENT = BaseURL.API_REPORT + '/exportBankStatement';
    public static SIGN_BANK_STATEMENT = BaseURL.API_REPORT + '/signBankStatement';

     // Unit
     public static GET_UNIT_PAGING = BaseURL.API_UNIT + '/getUnitPaging';
     public static CREATE_UNIT = BaseURL.API_UNIT + '/createUnit';
     public static UPDATE_UNIT = BaseURL.API_UNIT + '/updateUnit';
     public static DELETE_UNIT = BaseURL.API_UNIT + '/deleteUnit';
     public static EXPORT_UNIT = BaseURL.API_UNIT + '/exportUnit';
     public static IMPORT_UNITS = BaseURL.API_UNIT+ '/importUnit';
     // User
    public static GET_USER_2_PAGING = BaseURL.API_USERDEMO + '/getUserDemoPaging';
    public static CREATE_USER_2 = BaseURL.API_USERDEMO + '/createUserDemo';
    public static UPDATE_USER_2 = BaseURL.API_USERDEMO + '/updateUserDemo';
    public static DELETE_USER_2 = BaseURL.API_USERDEMO + '/deleteUserDemo';
    public static IMPORT_USERS_2 = BaseURL.API_USERDEMO + '/importUserDemo';
    
     
}
