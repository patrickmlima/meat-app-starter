import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'

import { MEAT_API } from '../../app.api'
import { User } from './user.model'

@Injectable()
export class LoginService {

    private user: User

    private lastURL: string

    constructor(private http: HttpClient, private router: Router) {
        this.router.events.filter(e => e instanceof NavigationEnd)
            .subscribe((e: NavigationEnd) => this.lastURL = e.url)
    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>(
            `${MEAT_API}/login`, { email: email, password: password })
            .do(user => this.user = user)
    }

    logout() {
        this.user = undefined
    }

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    getAccessToken(): string {
        return this.isLoggedIn() ? this.user.accessToken : ""
    }

    handleLogin(path: string = this.lastURL) {
        this.router.navigate(['/login', btoa(path)])
    }

    getUser(): User {
        return this.user
    }
}