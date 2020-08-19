import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jtw_decode from 'jwt-decode';

@Injectable({ providedIn: 'root'})
export class UserService {

    // private userSubject = new Subject<User>(); // Subject não aguarda o header ser carregado e assim perde as informações.
    private userSubject = new BehaviorSubject<User>(null); // BehaviorSubject irá aguardar o header ser carregado para mandar as informações.
    private userName: string;
    
    constructor(private tokenService: TokenService) {

        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null)
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }
}