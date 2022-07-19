import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Unit } from '../../models/auth.models';
import {User} from '../../models/auth.models';
import {CookieService} from './cookie.service';
import {CommandURL} from '../../commands/api.command';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    user: User;
    unit: Unit;
    helper = new JwtHelperService();

    constructor(private http: HttpClient,
                private cookieService: CookieService,
    ) {
    }

    /**
     * Returns the current user
     */
    public currentUserBase64(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.user;
    }

    public currentUser() {
        return this.helper.decodeToken(this.currentUserBase64().token);
    }

    public currentUnitBase64(): Unit {
        if (!this.unit) {
            this.unit = JSON.parse(this.cookieService.getCookie('currentUnit'));
        }
        return this.unit;
    }

    public currentUnit() {
        return this.helper.decodeToken(this.currentUnitBase64().token);
    }
    

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        return this.http.post<any>(CommandURL.LOGIN, {email, password})
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    this.user = user;
                    // store user details and jwt in cookie
                    this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
                }
                return user;
            }));
    }

    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        this.user = null;
    }
}

