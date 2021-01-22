import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {first, map} from 'rxjs/operators';
import {User} from '../../models/user.model';

const baseUrl = 'https://localhost:8015 ';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) { }


    signin(user: User): Observable<any> {
        return this.http.post('http://localhost:8015/user/signin', user, {observe: 'response'});
    }
    signup(user: User): Observable<any> {
        return this.http.post('$(baseUrl)/signup/', user,
            {observe: 'response' as 'body'})
            .pipe(map(vUser => {
                return vUser;
            }));
    }
}
